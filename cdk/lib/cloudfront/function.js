import cf from 'cloudfront';

const kvsId = '{{keyValueStoreId}}';

const kvsHandle = cf.kvs(kvsId);

async function handler(event) {
  const request = event.request;
  let version = '/versions/stable.js';
  const canaryStableRandNum = Math.floor(Math.random() * 99);

  try {
    const stablePercent = await kvsHandle.get('stable');
    const aPercent = await kvsHandle.get('a');
    // const bPercent = await kvsHandle.get('b');

    if (canaryStableRandNum > stablePercent) {
      const canaryVersionsRandNum = Math.floor(Math.random() * 99);

      if(canaryVersionsRandNum > aPercent) {
        version = '/versions/canary/b.js';
      } else {
        version = '/versions/canary/a.js';
      }
    }
  } catch (err) {
    console.log(`Versions decision failed: ${err}`);
  }

  request.uri = version;
  return request;
}

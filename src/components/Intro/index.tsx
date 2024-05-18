const Intro = () => {
  return (
    <div>
      <h1 style={{ marginTop: '30px' }}>Cloudfront A/B testing using edge function</h1>
      <p>
        A simple demo of edge A/B testing (or canary deployments technique) using cloudfront function and KeyValueStore.
        According to the following architecture, each request will reach to cloudfront and pass through a viewer request
        cloudfront function. The function uses a KeyValueStore which store the versions and their percentage (see table
        below), then it run a simple logic for random version decision and finally manipulate the request uri and
        replace it with the relevant chosen version file from S3.
      </p>
    </div>
  );
};

export default Intro;

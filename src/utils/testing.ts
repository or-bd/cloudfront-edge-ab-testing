import { Store, Testing, Versions } from '../types/types.ts';
import store from '../../cdk/lib/cloudfront/store.json';

const testing: Testing = {
  random_x: 0,
  random_y: 0,
  versions: {
    [Versions.Stable]: 0,
    [Versions.A]: 0,
    [Versions.B]: 0,
  },
};

(store as Store).data.forEach(({ key, value }) => {
  testing.versions[key] = parseInt(value);
});

export const isStable = () => testing.random_x < testing.versions.stable;
export const isA = () => testing.random_y < testing.versions.a;
export const updateTesting = (newTesting: Testing) => Object.assign(testing, newTesting);

export default testing;

import { Testing } from './types.ts';

declare global {
  interface Window { testing: Testing; }
}

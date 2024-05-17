import { Testing } from './types.ts';

declare module '*.module.css';

declare global {
  interface Window { testing: Testing; }
}

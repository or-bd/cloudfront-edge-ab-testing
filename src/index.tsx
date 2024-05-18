import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import View from './components/View';
import { updateTesting } from './utils/testing';
import { Testing } from './types/types.ts';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('app div not found');
}

const appRender = () => {
  const root = createRoot(appElement);
  root.render(
    <StrictMode>
      <View />
    </StrictMode>,
  );
};

// @ts-expect-error vitejs global mode env variable
if (import.meta.env.DEV) {
  import('./testing/stable.ts').then(() => {
    updateTesting(window.testing as Testing);
    appRender();
  });
} else {
  const [head] = document.getElementsByTagName('head');
  const script = document.createElement('script');
  script.src = '/testing.js';
  script.type = 'module';
  head.appendChild(script);
  script.onload = appRender;
}


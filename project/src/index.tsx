import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  OffersAmount: 5
} as const;

root.render(
  <React.StrictMode>
    <App
      offersAmount = {Setting.OffersAmount}
    />
  </React.StrictMode>,
);

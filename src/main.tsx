import React from 'react';
import ReactDOM from 'react-dom/client';
import Donate from './pages/Donate';
import './sass/main.scss';
import './i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Donate />
  </React.StrictMode>
);

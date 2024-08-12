import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './GlobalStyles.js';
(async () => {
  await onready();
  ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
  );
})();
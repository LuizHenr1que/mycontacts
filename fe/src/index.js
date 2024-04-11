import React from 'react';
import { createRoot } from 'react-dom'; // Importe createRoot em vez de ReactDOM

import App from './components/App';

// Use createRoot em vez de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

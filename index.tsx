import React from 'react';
import ReactDOM from 'react-dom/client';
import DevConsole from './Developer-Marketing';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element to mount to");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DevConsole />
  </React.StrictMode>
);
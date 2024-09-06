// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Use createRoot to initialize React in React 18
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

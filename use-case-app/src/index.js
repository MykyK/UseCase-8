import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // path to your store file
import { createRoot } from "react-dom/client";
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


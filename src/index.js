import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bulma/css/bulma.min.css';


const rootElement = document.getElementById('root');
const root= ReactDOMClient.createRoot(rootElement);
root.render(
  <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

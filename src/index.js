import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/IRANSansWeb.ttf";
import "bootstrap/dist/css/bootstrap.css";
import "./fonts/IRANSansWeb_Bold.ttf"
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App dir="rtl" />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
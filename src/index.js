import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

window.$ = require("jquery");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
  // </React.StrictMode>
);
reportWebVitals();

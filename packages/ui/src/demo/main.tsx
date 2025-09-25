import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";                 // tailwind for sandbox only
import "../tokens.css";               // load tokens in sandbox
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
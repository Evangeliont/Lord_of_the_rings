import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/main.global.scss";
import { ThemeProvider } from "./Context/ThemeContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

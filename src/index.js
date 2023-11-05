import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
// Somewhere in your `index.ts`:
setChonkyDefaults({ iconComponent: ChonkyIconFA });



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);



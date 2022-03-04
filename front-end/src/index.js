import React from "react";
import ReactDOM from "react-dom";
import SnackbarProvider from "react-simple-snackbar";
import App from "./App";
import "./Reset.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

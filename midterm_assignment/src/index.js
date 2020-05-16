import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import AuthContextComponent from "./components/contex/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextComponent>
      <App />
    </AuthContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);

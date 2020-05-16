import React, { useState, useContext, useEffect } from "react";
import Login from "./components/Form/Login";
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";
import { AuthContext } from "./components/contex/authContext";
import GlobalData from "./components/GlobalData";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="container">
      {/* {!isAuthenticated && <Login />}
      {isAuthenticated && <Dashboard />} */}
      <GlobalData />
    </div>
  );
}

export default App;

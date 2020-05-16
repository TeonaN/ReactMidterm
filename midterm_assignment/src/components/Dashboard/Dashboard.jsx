import React, { useContext } from "react";

import { AuthContext } from "../contex/authContext";

function Dashboard(props) {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="row flex-column p-5 bg-info">
      <h2>Dashboard Page</h2>
      <h4>Admin Dashboard</h4>
      <hr />
      <button onClick={handleLogOut} className="btn btn-warning">
        LogOut
      </button>
    </div>
  );
}

export default Dashboard;

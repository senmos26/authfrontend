import React from "react";
const Dashboard = ({ onLogout }) => (
  <div>
    <h2>Dashboard</h2>
    <button onClick={onLogout}>Se déconnecter</button>
  </div>
);
export default Dashboard;

// src/App.js


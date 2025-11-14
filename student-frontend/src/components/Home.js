import React from "react";
import "./Home.css";

function Home({ onLogout }) {
  return (
    <div className="home-container">
      <h1>🎓 Welcome to the Student Dashboard</h1>
      <p>You are logged in as <b>Admin</b></p>
      <button onClick={() => onLogout(false)}>Logout</button>
    </div>
  );
}

export default Home;

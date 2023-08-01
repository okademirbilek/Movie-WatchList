import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError(" ");

    await logout()
      .then(navigate("/login"))
      .catch((error) => {
        setError("Failed to log out");
      });
  }
  return (
    <div className="dashboard">
      <div className="profile-container">
        {/* <div className="box">
          <div className="box2"></div>
        </div> */}
        <h1>Profile</h1>
        <h2>{currentUser.email}</h2>
        {error && <h2>{error}</h2>}
        <Link to="/update-profile">Update Profile</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

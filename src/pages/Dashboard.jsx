import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { currentUser, logout, updateUserName } = useAuth();
  const [userName, setUserName] = useState(
    currentUser?.displayName || "MovieStar123"
  );
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogout() {
    setError(" ");

    await logout()
      .then(navigate("/login"))
      .catch((error) => {
        setError("Failed to log out");
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    await updateUserName({ displayName: userName, photoURL: "" })
      .then(() => {
        // console.log("it worked");
      })
      .catch(() => {
        setError("Failed to update userName");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserName(value);
  }

  return (
    <div className="dashboard">
      <div className="profile-container">
        <h1>Profile</h1>
        <form onSubmit={handleSubmit} className="reset-form">
          <label className="label-input special" htmlFor="userName">
            Username
          </label>
          <div className="username-input-div">
            <input
              name="userName"
              onChange={handleChange}
              type="text"
              value={userName}
              id="userName"
              maxLength={15}
            />
            <button className="username-btn">Save</button>
          </div>
        </form>
        <h2>{currentUser.email}</h2>
        {error && <h2>{error}</h2>}
        <Link to="/update-profile">Update Profile</Link>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

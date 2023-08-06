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
      .then(() => {})
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
      <div className="flex-container">
        <div className="profile-container">
          <h1>Profile</h1>
          <form onSubmit={handleSubmit} className="reset-form">
            <label className="label-input2" htmlFor="userName">
              Username
            </label>
            <div className="username-input-div">
              <input
                id="userName"
                name="userName"
                onChange={handleChange}
                type="text"
                value={userName}
                placeholder="Username cannot be empty"
                maxLength={15}
              />
              <button className="username-btn">Save</button>
            </div>
          </form>
          <label className="label-input2">Email</label>
          <h3>{currentUser.email}</h3>
          {error && <h2>{error}</h2>}
          <Link className="update-btn" to="/update-profile">
            Update Profile
          </Link>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

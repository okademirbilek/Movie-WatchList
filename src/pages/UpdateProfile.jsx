import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UpdateProfile() {
  const { currentUser, updateEmailUser, updatePasswordUser } = useAuth();
  const [updateFormData, setUpdateFormData] = useState({
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
  });
  //signup function from useAuth context (email, password)
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (updateFormData.password !== updateFormData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setStatus("idle");
    setError("");

    if (updateFormData.email !== currentUser.email) {
      promises.push(updateEmailUser(updateFormData.email));
    }
    if (updateFormData.password) {
      promises.push(updatePasswordUser(updateFormData.password));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={updateFormData.email}
          required
        />

        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Leave blank to keep the same"
          value={updateFormData.password}
        />
        <input
          name="passwordConfirm"
          onChange={handleChange}
          type="password"
          placeholder="Leave blank to keep the same"
          value={updateFormData.passwordConfirm}
        />
        {error && <h3 className="login-error">{error}</h3>}
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Updating..." : "Update"}
        </button>
      </form>
      <div>
        <Link to="/dashboard"> Cancel </Link>
      </div>
    </div>
  );
}

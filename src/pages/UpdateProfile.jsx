import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UpdateProfile() {
  const { currentUser, updateEmailUser, updatePasswordUser } = useAuth();
  const [updateFormData, setUpdateFormData] = useState({
    email: currentUser.email,
    password: "",
    passwordConfirm: "",
  });

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
        <label className="label-input" htmlFor="email">
          Email
        </label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={updateFormData.email}
          required
        />
        <label className="label-input" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Leave blank to keep the same"
          value={updateFormData.password}
        />
        <label className="label-input" htmlFor="passwordConfirm">
          Password Confirm
        </label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          type="password"
          placeholder="Leave blank to keep the same"
          value={updateFormData.passwordConfirm}
        />
        {error && (
          <div className="alert">
            <h3 className="login-error">{error}</h3>
          </div>
        )}
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

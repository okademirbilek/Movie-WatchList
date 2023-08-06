import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Icon from "react-icons-kit";

import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Login() {
  const [inputType, setInputType] = useState("password");
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setStatus("submitting");
    await login(loginFormData.email, loginFormData.password)
      .then((user) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorString = error.message
          .split("/")[1]
          .slice(0, -2)
          .split("-")
          .join(" ");
        setError(`Failed to log in : ${errorString} `);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <div className="glass-container">
        <h1>Sign in </h1>
        <form onSubmit={handleSubmit} className="form">
          <label className="input-label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            value={loginFormData.email}
            required
          />
          <label className="input-label" htmlFor="login-password">
            Password
          </label>
          <div className="input-with-icon">
            <input
              id="login-password"
              name="password"
              onChange={handleChange}
              type={inputType}
              placeholder="Password"
              value={loginFormData.password}
              minLength={6}
              className="custom-input"
              required
            />
            {inputType === "password" ? (
              <Icon
                icon={eyeOff}
                onClick={() => setInputType("text")}
                className="icon-comp"
                size={25}
                style={{ display: "flex" }}
              />
            ) : (
              <Icon
                icon={eye}
                onClick={() => setInputType("password")}
                className="icon-comp"
                size={25}
                style={{ display: "flex" }}
              />
            )}
          </div>

          {error && (
            <div className="alert">
              <h3 className="login-error">{error}</h3>
            </div>
          )}
          <button disabled={status === "submitting"}>
            {status === "submitting" ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="link-div">
          <Link className="form-link" to="/forgot-password">
            Forgot Password?
          </Link>
        </div>
        <div className="link-div">
          Don’t have an account?{" "}
          <Link className="form-link" to="/sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

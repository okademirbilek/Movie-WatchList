import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
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
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          required
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          required
        />
        {error && (
          <div className="alert">
            <h3 className="login-error">{error}</h3>
          </div>
        )}
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log In"}
        </button>
      </form>
      <div>
        <Link to="/forgot-password"> Forgot Password? </Link>
      </div>
      <div>
        Don’t have an account? <Link to="/sign-up"> Sign Up </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Icon from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  //signup function from useAuth context (email, password)
  const [inputType, setInputType] = useState("password");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const { signup } = useAuth();

  //   const location = useLocation();
  const navigate = useNavigate();

  //   const from = location.state?.from || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    if (signUpFormData.password !== signUpFormData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    await signup(signUpFormData.email, signUpFormData.password)
      .then((user) => {
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        setError("Failed to create an account");
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={signUpFormData.email}
          required
        />

        <div className="input-with-icon">
          <input
            name="password"
            onChange={handleChange}
            type={inputType}
            placeholder="Password"
            value={signUpFormData.password}
            minLength={6}
            required
            className="custom-input"
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

        <input
          name="passwordConfirm"
          onChange={handleChange}
          type={inputType}
          placeholder="Confirm password "
          value={signUpFormData.passwordConfirm}
          required
        />
        {error && (
          <div className="alert">
            <h3 className="login-error">{error}</h3>
          </div>
        )}
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Signing up..." : "Sign up"}
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login"> Sign In </Link>
      </div>
    </div>
  );
}

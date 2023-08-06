import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthRequired() {
  const { currentUser } = useAuth();
  let isLoggedIn = false;
  if (currentUser) {
    isLoggedIn = true;
  }

  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must log in first",
          from: location.pathname,
        }}
        replace
      />
    );
  }
  return <Outlet />;
}

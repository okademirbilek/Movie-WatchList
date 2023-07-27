import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthRequired() {
  // const isLoggedIn = false;
  const { currentUser } = useAuth();
  let isLoggedIn = false;
  if (currentUser) {
    isLoggedIn = true;
  }

  // console.log("currentuser", currentUser);
  // console.log("isloggedin", isLoggedIn);

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

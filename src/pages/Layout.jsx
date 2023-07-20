import React from "react";
import Header from "../components/Header";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SnackbarProvider autoHideDuration={1000} />
    </>
  );
}

import React from "react";
import Header from "../components/Header";
import { SnackbarProvider } from "notistack";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <SnackbarProvider autoHideDuration={1000} />
      {/* <Footer /> */}
    </>
  );
}

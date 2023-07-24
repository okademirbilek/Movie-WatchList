import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-text">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link className="notfound-link" to="/">
        Return to Home
      </Link>
    </div>
  );
}

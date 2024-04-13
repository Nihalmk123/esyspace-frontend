import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{ backgroundColor: "#F5F7F8" }}>
        <div className="container">
          <Link className="navbar-brand fs-2 text-dark" to="/">
            Esyspace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/Features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/Pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/HelpCenter"
                >
                  Help Center
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark font-weight-bold"
                  to="/Dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ backgroundColor: "#FF4E4E", color: "#FFF", padding: "8px 15px", borderRadius: "5px", marginRight: "10px" }}
                  to="/Signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ backgroundColor: "#FF4E4E", color: "#FFF", padding: "8px 15px", borderRadius: "5px" }}
                  to="/Signin"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

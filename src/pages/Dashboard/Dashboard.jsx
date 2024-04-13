import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <div className="col-auto">
        <div className="sidebar d-flex flex-column justify-space-between bg-dark text-white p-2 vh-100">
          <div>
            <a
              className="d-flex align-item-center mt-3"
              style={{ textDecoration: "none" }}
            >
              <img className="fs-5" style={{ width: "35%" }} src={""} alt="" />
              <span className="fs-5 text-white mt-2">Esyspace</span>
            </a>
            <hr className="mt-4" />
            <ul className="nav nav-pills flex-column p-0 m-0">
              <li className="nav-item p-1">
                <a href="" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashboard</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <Link to="/" className="nav-link text-white">
                  <i className="bi bi-person me-2 fs-5"></i>
                  <span className="">Book Confernece room</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/Create_invoice" className="nav-link text-white">
                  <i className="bi bi-person me-2 fs-5"></i>
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/Create_Tax" className="nav-link text-white">
                  <i className="bi bi-person me-2 fs-5"></i>
                  <span>Contact</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                  {/* <i className="bi bi-person me-2 fs-5"></i> */}
                  <span>
                    <Box className="bg-white">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker label="Select Date"/>
                      </LocalizationProvider>
                    </Box>
                  </span>
              </li>
            </ul>
          </div>
          <di>
            <hr className="text-white" />
            <div className="d-flex align-items-center justify-content-center">
              <button className="button fs-6">Free Trail</button>
            </div>
          </di>
        </div>
      </div>
      <div className="col">
        <nav
          className="navbar navbar-expand-lg navbar-dark shadow-sm"
          style={{ backgroundColor: "#F5F7F8" }}
        >
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
                  <Link
                    className="nav-link text-dark font-weight-bold"
                    to="/Features"
                  >
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
                    style={{
                      backgroundColor: "#FF4E4E",
                      color: "#FFF",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                    to="/Signup"
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{
                      backgroundColor: "#FF4E4E",
                      color: "#FFF",
                      padding: "8px 15px",
                      borderRadius: "5px",
                    }}
                    to="/Signin"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <div className="container-fluid">
<div className="row">
  <div className="col-md-3">
    <Sidebar />
  </div>
  <div className="col-md-9">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
  </div>
</div>
</div> */
}

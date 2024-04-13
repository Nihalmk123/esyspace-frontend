import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
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
              <span className="">Home</span>
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
        </ul>
      </div>
      <di>
        <hr className="text-white" />
        <div className="d-flex align-items-center justify-content-center">
          <button className="button fs-6">Free Trail</button>
        </div>
      </di>
    </div>
  );
};

export default Sidebar;

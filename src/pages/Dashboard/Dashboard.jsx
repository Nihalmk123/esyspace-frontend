import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Layouts/Header";
import BookConfRoom from "../BookConfRoom/BookConfRoom";
const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="col">
        <Header />
        <Routes>
          <Route path="Book" element={<BookConfRoom />} />
          <Route path="Plane" element={<h1>hello</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

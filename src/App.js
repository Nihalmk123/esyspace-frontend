import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Feature from "./pages/Features/Feature";
import Signup from "./pages/Registration/Signup";
import Signin from "./pages/Registration/Signin";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Price from "./Price/Price";
import Dashboard from "./pages/Dashboard/Dashboard";
import BookConfRoom from "./pages/BookConfRoom/BookConfRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Features" element={<Feature />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Pricing" element={<Price />} />
        <Route path="/Dashboard1/*" element={<Dashboard />}>
          <Route path="Book" element={<h1>hello</h1>} />
          <Route path="Plane" element={<h1>Planes</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

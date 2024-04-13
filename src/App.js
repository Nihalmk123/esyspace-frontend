import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feature from "./pages/Features/Feature";
import Signup from "./pages/Registration/Signup";
import Signin from "./pages/Registration/Signin";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Price from "./Price/Price";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Features" element={<Feature />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Pricing" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

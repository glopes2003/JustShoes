import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brand from "./pages/Brand";
import Shoe from "./pages/Shoe";
import Home from './pages/Home';

import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/shoe" element={<Shoe />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
   
    
  

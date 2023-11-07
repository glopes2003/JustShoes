import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Brand from "./pages/Brand";
import Navbar from "./components/Navbar";
import Shoe from "./pages/Shoe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/brand" element={<Brand />} />
        <Route path="/shoe" element={<Shoe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

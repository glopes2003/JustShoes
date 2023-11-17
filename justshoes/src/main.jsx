import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Brand from "./pages/Brand";
import Shoe from "./pages/Shoe";
import Home from "./pages/Home";

import "./style/index.css";

const Main = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Navbar cartCount={cartCount} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brand" element={<Brand />} />
          <Route
            path="/shoe"
            element={<Shoe handleAddToCart={handleAddToCart} />}
          />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
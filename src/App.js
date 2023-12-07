import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Routes>
      <Route exact path="/" Component={HomePage} />
      <Route path="/products" Component={ProductPage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppLayout />
  </Router>
);

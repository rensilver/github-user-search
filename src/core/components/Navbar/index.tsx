import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => (
  <nav className="main-navbar">
    <Link to="/" className="navbar-text">
      Bootcamp DevSuperior
    </Link>
  </nav>
);

export default Navbar;

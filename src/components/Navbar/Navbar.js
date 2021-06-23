import React from "react";
import "../Navbar/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;

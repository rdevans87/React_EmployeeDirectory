import React from "react";
import Search  from "../Search/Search"
import "../Navbar/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-fixed-top navbar bg-dark">
      <div className="navbar navbar-row">
      <Search handleSearchChange={handleSearchChange} />
    </div>
    </nav>
  );
}

export default Navbar;

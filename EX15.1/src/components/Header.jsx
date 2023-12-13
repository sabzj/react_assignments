import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/HomePage">Home</Link> */}
      <Link to="/Products">Products</Link>
    </nav>
  );
}

export default Header;

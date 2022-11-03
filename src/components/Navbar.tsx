import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>LOGO</h2>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/items"}>
          <li>Items</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

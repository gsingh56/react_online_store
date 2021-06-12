import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container">
        <Link to={"/"}>
          <h2>Fake Shop</h2>
        </Link>
      </div>
      <div className="ui container">
        <Link to={"/cart"}>
          <h2>Shopping Cart</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;

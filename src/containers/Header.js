import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="ui menu">
      <Link to={"/"}>
        <div class="header item">
          <h2>Fake Shop</h2>
        </div>
      </Link>

      <Link to={"/cart"}>
        <a class="item">
          <h2>Shopping Cart</h2>
        </a>
      </Link>
    </div>
  );
};

export default Header;

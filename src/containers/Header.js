import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/productActions";

const Header = () => {
  const dispatch = useDispatch();
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

      <button
        onClick={() => {
          dispatch(logOut());
        }}
        className="header item"
      >
        logout
      </button>
    </div>
  );
};

export default Header;

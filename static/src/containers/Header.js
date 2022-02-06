import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/actions/productActions";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div class="ui menu">
      <Link to={"/"}>
        <div className="header item">
          <h2>Fake Shop</h2>
        </div>
      </Link>

      <Link to={"/cart"}>
        <div className="item">
          <h2>Shopping Cart</h2>
        </div>
      </Link>

      <Link to={"/upload"}>
        <div className="item">
          <h2>Upload Product</h2>
        </div>
      </Link>

      <div class="right menu">
    <a class="ui item" onClick={() => {
          dispatch(logOut());
        }}>
      Logout
    </a>
  </div>
    </div>
  );
};

export default Header;

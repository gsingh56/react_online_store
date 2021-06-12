import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";
import { Link } from "react-router-dom";

export const ProductCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let total_cost = 0;
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const cart_jsx = cartItems.map((item) => {
    total_cost += item.price * item.count;
    return (
      <div class="four wide column">
        <div class="ui card" key={item.id}>
          <div class="image">
            <img style={{ height: "200px" }} src={item.image} />
          </div>
          <div class="content" style={{ height: "150px" }}>
            <a class="header">{item.title}</a>
            <div class="description">Quantity: {item.count}</div>
          </div>
          <div class="extra content">
            <button
              className="ui red button"
              onClick={() => {
                removeItem(item);
              }}
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <div className="ui grid container">{cart_jsx}</div>
      {cartItems.length > 0 ? (
        <div
          style={{
            width: "300px",
            height: "auto",
            marginTop: "2rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "1rem",
          }}
          class="ui card"
        >
          <h1>Total Cost - $ {total_cost.toFixed(2)}</h1>
          <Link to={"/cart/order"}>
            <button className="ui primary button">Proceed To Checkout</button>
          </Link>
        </div>
      ) : (
        <div class="ui message" style={{ marginTop: "5rem" }}>
          <div class="header">Empty Cart</div>
          <p>
            Your cart is empty. Please add items to the cart to proceed to the
            checkout
          </p>
        </div>
      )}
    </div>
  );
};

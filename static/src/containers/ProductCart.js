import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/actions/productActions";

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
      <div class="four wide column" key={item.id}>
        <div class="ui link cards" key={item.id}>
          <div className="ui card">
            <div class="image">
              {item.image && (
                <img src={require("../images/" + item.image).default} alt={item.title}/>
              )}
            </div>
            <div class="content">
            <Link to={`/product/${item.id}`}>
              
            <div class="header">{item.title}</div>
             </Link>
              
              <div className="meta price">$ {item.price}</div>
              <div className="meta">Quantity - {item.count}</div>
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
      </div>
    );
  });

  return (
    <div>
      <div className="ui grid container">{cart_jsx}</div>
      {cartItems.length > 0 ? (
        <div class="ui card totalCost">
          <div>
            <h3>Total Cost - $ {total_cost.toFixed(2)}</h3>
            <Link to={"/cart/order"}>
              <button className="ui primary button">Proceed To Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <div class="ui message topMargin">
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

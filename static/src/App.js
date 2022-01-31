import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";
import { ProductCart } from "./containers/ProductCart";
import { OrderForm } from "./containers/OrderForm";
import { LogIn } from "./containers/LogIn";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logIn } from "./redux/actions/productActions";
import { useState } from "react";

function App() {
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  var timer;

  useEffect(() => {
    timer = setTimeout(() => {
      setShowMessage(true);
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!token) {
    return <LogIn />;
  }

  const refreshToken = () => {
    axios
      .get("http://localhost:5423/refresh", {
        headers: { Authorization: "JWT " + token },
      })
      .then((res) => {
        dispatch(logIn({ token: res.data.token }));
        setShowMessage(false);
        timer = setTimeout(() => {
          setShowMessage(true);
        }, 30000);
      })
      .catch((err) => {
        console.log(err);
        clearTimeout(timer);
      });
  };

  return (
    <div className="App">
      {showMessage && (
        <div class="ui negative message">
          <div class="header">Are you still there?</div>
          <p>Do you wish to continue your session?</p>
          <button class="ui primary button" onClick={refreshToken}>
            click
          </button>
        </div>
      )}
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route path="/cart" exact component={ProductCart} />
          <Route path="/cart/order" exact component={OrderForm} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

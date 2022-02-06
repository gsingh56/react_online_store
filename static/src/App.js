import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UploadProductForm } from "./admin/UploadProductForm";
import "./App.css";
import Header from "./containers/Header";
import { LogIn } from "./containers/LogIn";
import { OrderForm } from "./containers/OrderForm";
import { ProductCart } from "./containers/ProductCart";
import ProductDetails from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import { logIn } from "./redux/actions/productActions";


function App() {
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  let timer

  useEffect(() => {
     const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5 * 60 * 1000)
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
        }, 5 *60 *1000);
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
          <Route path="/upload" excat component={UploadProductForm} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

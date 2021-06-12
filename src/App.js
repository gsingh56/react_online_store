import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";
import { ProductCart } from "./containers/ProductCart";
import { OrderForm } from "./containers/OrderForm";
import { LogIn } from "./containers/LogIn";

function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return <LogIn setToken={setToken} />;
  }
  return (
    <div className="App">
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

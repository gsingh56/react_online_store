import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(token));
  }, []);
  console.log(products);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

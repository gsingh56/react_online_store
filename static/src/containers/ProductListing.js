import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(token));
  }, [dispatch, token]);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

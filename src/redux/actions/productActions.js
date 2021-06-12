import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");

  dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);

  dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let already_in_cart = true;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item["count"]++;
      already_in_cart = false;
    }
  });
  if (already_in_cart) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: cartItems,
  });
};

export const removeFromCart = (product) => (dispatch, getState) => {
  let cartItems = getState().cart.cartItems.slice();
  cartItems = cartItems.filter((item) => {
    if (item.count > 1) {
      item.count--;
      return true;
    } else {
      return item.id !== product.id;
    }
  });
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: cartItems,
  });
};

export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

import { actionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartReducer = (state = {cartItems: []}, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TO_CART:
      return { cartItems: payload };
    case actionTypes.REMOVE_FROM_CART:
      return { cartItems: payload };
    case actionTypes.EMPTY_CART:
      return { cartItems: [] };
    default:
      return state;
  }
};

export const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.LOG_IN:
      return payload;
    default:
      return state;
  }
};

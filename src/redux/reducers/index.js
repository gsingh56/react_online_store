import { combineReducers } from "redux";

import {
  productReducer,
  selectedProductReducer,
  cartReducer,
  authReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default reducers;

import { combineReducers } from "redux";
import { actionTypes } from "../constants/action-types";
import storage from "redux-persist/lib/storage";

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

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === actionTypes.LOG_OUT) {
    storage.removeItem('persist:root')
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;


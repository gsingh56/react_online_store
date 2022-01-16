import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, reducers);

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
export const persistor = persistStore(store);

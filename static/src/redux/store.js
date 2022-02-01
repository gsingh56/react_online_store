import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

const persistConfig = {
  key: "root",
  storage: storage,
};

const config = {
};
const middlewares = [createStateSyncMiddleware(config), thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, reducers);

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const store = createStore(pReducer, composeEnhancers(applyMiddleware(...middlewares)));
initMessageListener(store);
export default store;
export const persistor = persistStore(store);

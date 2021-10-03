import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "./reducers/productReducer";
import { addToCartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
});
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;

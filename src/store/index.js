import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import shopReducer from "./ShopStore/shopReducer.js";

const reducers = combineReducers({
    shop: shopReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import users from "./users";
import deletedUsers from "./deletedUsers";

const reducers = combineReducers({
    users,
    deletedUsers
})

export const store = createStore(reducers, applyMiddleware(thunk));
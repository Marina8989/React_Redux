import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from './users';

const reducers = combineReducers({
    users
})
export const store = createStore(reducers, applyMiddleware(thunk))
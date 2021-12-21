import {combineReducers, createStore} from 'redux';
import counterReducer from './counter';

const reducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(reducers)
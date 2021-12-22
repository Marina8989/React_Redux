import {combineReducers, createStore} from 'redux';
import todos from './todos';

const reducers = combineReducers({
    todos
})

export const store = createStore(reducers);
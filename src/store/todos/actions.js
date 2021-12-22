import {ADD_TODO} from './index';

export const addTodo = (value) => ({
    type: ADD_TODO,
    payload: value
});
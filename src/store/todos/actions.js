import {ADD_TODO} from './index';

export const addTodo = (value) => {
     return{
         type: ADD_TODO,
         payload: value
     }
}
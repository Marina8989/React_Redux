import {ADD_TODO, REMOVE_TODO} from './index';

export const addTodo = (value) => {
    return{
        type: ADD_TODO,
        payload: value
    }
}

export const removeTodo = (value) => {
    return {
       type: REMOVE_TODO,
       payload: value
    } 
}
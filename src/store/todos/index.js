const initialState = {
    data: []
}
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

function todosReducer(state=initialState, action){
    switch(action.type){
      case ADD_TODO:
        return {
            ...state,
            data: [...state.data, action.payload]
        }
       case REMOVE_TODO:
           return{
               ...state,
               data: state.data.filter(el => el !== action.payload)
           }
      default: 
        return state;
    }
}

export default todosReducer;
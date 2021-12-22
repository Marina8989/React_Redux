const initialState = {
    data: []
}
export const ADD_TODO = 'ADD_TODO';

function todosReducer(state=initialState, action){
    switch(action.type){
      case ADD_TODO:
        return {
            ...state,
            data: [...state.data, action.payload]
        }
      default: 
        return state;
    }
}

export default todosReducer;
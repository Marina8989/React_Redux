const initialState = {
    data: []
}

export const DELETED_USER = "DELETED_USER";

function deletedUserReducer(state=initialState, action){
   switch(action.type){
       case DELETED_USER:
           return {
               ...state,
               data: [...state.data, action.payload]
           } 
       default:
        return state;
   }
}

export default deletedUserReducer;
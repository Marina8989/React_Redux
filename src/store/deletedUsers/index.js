import {REMOVE} from '../users';

const initialState = {
    data: []
}

function deletedUsersReducer(state=initialState, action){
   switch(action.type){
       case REMOVE:
           return{
               ...state,
               data: [...state.data, action.payload]
           }
       default:
           return state;
   }
}

export default deletedUsersReducer;
import {REMOVE_USER} from '../users';
const initialState = {
    data: []
}


function deletedUsersReducer(state = initialState, action ) {
    switch(action.type){
       case REMOVE_USER:
           return {
              ...state,
              data: [...state.data, action.payload]
           }
        default:
          return state;   
    }
    
}

export default deletedUsersReducer;
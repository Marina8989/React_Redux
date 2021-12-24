const initialState = {data: []};

export const GOT_USERS_SUCCESS = "GOT_USERS_SUCCESS";


function usersReducer(state=initialState , action) {
    switch(action.type){
        case GOT_USERS_SUCCESS:
          return {
               ...state,
               data: action.payload
            }
        default:  
          return state;
    }
}
export default usersReducer;
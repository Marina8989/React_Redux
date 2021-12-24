const initialState = {
    data: [],
    isLoading: false,
    isError: false
};

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GOT_USERS_SUCCESS = "GOT_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";


function usersReducer(state=initialState , action) {
    switch(action.type){
        case GET_USERS_PENDING:
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case GOT_USERS_SUCCESS:
          return {
               ...state,
               data: action.payload,
               isLoading: false,
               isError: false
            }    
        case GET_USERS_ERROR:
            return {
                ...state,
                isError: true,
            }    
        default:  
          return state;
    }
}
export default usersReducer;
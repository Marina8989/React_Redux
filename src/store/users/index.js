const initialState = {
    data: [],
    isLoading: false,
    isError: false
}
export const USER_PENDING = "USER_PENDING";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case USER_PENDING:
        return {
            ...state,
            isLoading: true
        }
    case USER_SUCCESS:
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    case USER_ERROR:
        return {
            ...state,
            isError: true,
            isLoading: false
        }        
    default:
      return state;
  }
}

export default usersReducer
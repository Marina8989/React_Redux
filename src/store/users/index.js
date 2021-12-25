const initialState = {
    data: [],
    isLaoding: false,
    isError: false
}

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const REMOVE_USER = "REMOVE_USER";

function usersReducers(state=initialState, action){
    switch(action.type){
        case GET_USERS_PENDING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        case REMOVE_USER:
            return {
                ...state,
                data: state.data.filter(el => el.id !== action.payload.id)
            }       
        default:
            return state;
    }
}

export default usersReducers
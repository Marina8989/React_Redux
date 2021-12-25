const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const REMOVE = "REMOVE";

function usersReducers(state=initialState, action){
  switch(action.type){
     case PENDING:
         return {
            ...state,
            isLoading: true,
            isError: false
         }
     case SUCCESS:
         return {
             ...state,
             data: action.payload,
             isLoading: false
         } 
     case ERROR:
         return {
             ...state,
             isError: true,
             isLoading: false
         } 
    case REMOVE:
        return {
            ...state,
            data: state.data.filter(el => el.id !== action.payload.id)
        }     
     default:
         return state;          
  }
}

export default usersReducers
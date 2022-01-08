const initialState = {
    data: [],
    isLoading: false,
    isError: false
};
export const SHOP_PENDING = "SHOP_PENDING";
export const SHOP_SUCCESS = "SHOP_SUCCESS";
export const SHOP_ERROR = "SHOP_ERROR";

const shopReducer = (state=initialState, action) => {
     switch(action.type){
         case SHOP_PENDING:
             return {
                 ...state,
                 isLoading: true,
                 isError: false
             }
          case SHOP_SUCCESS:
              return {
                  ...state,
                  data: action.payload,
                  isLoading: false,
                  isError: false
              } 
          case SHOP_ERROR:
              return {
                  ...state,
                  isError: true,
                  isLoading: false
              }      
         default: 
           return state;
     }
}

export default shopReducer;
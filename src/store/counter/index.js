const initialState = 1;
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function counterReducer(state=initialState, action){
   switch(action.type){
      case INCREMENT_COUNTER:
        return state + 1;
      case DECREMENT_COUNTER:
        return state - 1;
      default: 
        return state;  
   }
}

export default counterReducer;
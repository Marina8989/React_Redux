const initialState = 1;
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function counterReducer(state=initialState, action){
    if(action.type === INCREMENT_COUNTER){
       return state + 1;
    }
    if(action.type === DECREMENT_COUNTER) {
       return state- 1;
    }
     return state;
}

export default counterReducer;
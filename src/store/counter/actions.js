import {INCREMENT_COUNTER, DECREMENT_COUNTER, USER_NUMBER} from './index';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}
export const userNumberCounter = (userNumber) => {
    return {
        type: USER_NUMBER,
        payload: parseInt(userNumber)
    }
}
import {ADD_DELETED_USER} from './index';

export const addDeletedUser = (user) => (dispatch, getState) => {
    dispatch({
       type: ADD_DELETED_USER,
       payload: user
    })
}
import { DELETED_USER } from "./index";

export const deletedUser = (user) => (dispatch, getState) => {
    dispatch({
        type: DELETED_USER,
        payload: user
    })
}
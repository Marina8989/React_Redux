import axios from "axios";
import { deletedUser } from "../deletedUsers/actions"
import { USER_PENDING, USER_SUCCESS, USER_ERROR, REMOVE_USER } from "./index";

export const getData = () => async (dispatch, getState) => {
    try{
        dispatch({ type: USER_PENDING});
        const {data} = await axios("https://rickandmortyapi.com/api/character");
        dispatch({
            type: USER_SUCCESS,
            payload: data.results
        })

    }catch(err){
      dispatch({
          type: USER_ERROR
      })
    }
}

export const removeUser = (user) => (dispatch, getState) => {
     dispatch({
         type: REMOVE_USER,
         payload: user
     })
     dispatch(deletedUser(user))
}
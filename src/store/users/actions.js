import axios from "axios";
import { USER_PENDING, USER_SUCCESS, USER_ERROR } from "./index";

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
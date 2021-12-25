import axios from 'axios';
import {GET_USERS_SUCCESS, GET_USERS_ERROR, GET_USERS_PENDING} from './index';

export const getData = () => async (dispatch, getState) => {
    try{
       dispatch({
          type: GET_USERS_PENDING
       })
      const {data} = await axios("https://rickandmortyapi.com/api/character")
      dispatch({
         type: GET_USERS_SUCCESS,
         payload: data.results
      })
    }catch(err){
      dispatch({
         type: GET_USERS_ERROR,
         payload: err
      })
    }
}
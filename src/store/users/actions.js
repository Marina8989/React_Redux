import axios from 'axios';
import {PENDING, SUCCESS, ERROR, REMOVE} from './index';

export const getData = () => async (dispatch, getState) => {
  try{
    dispatch({
        type: PENDING
    })
    const {data} = await axios("https://rickandmortyapi.com/api/character");
    console.log(data)
    dispatch({
        type: SUCCESS,
        payload: data.results
    })
  }catch(err){
     dispatch({
         type: ERROR,
         payload: err
     })
  }
}

export const remove = (user) => (dispatch, getState) => {
//    const state = getState();
//    const newState = state.users.data.filter(el => el.id !== user.id);
   dispatch({
       type: REMOVE,
       payload: user
   })
}
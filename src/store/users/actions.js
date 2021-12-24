import axios from 'axios';
import {GOT_USERS_SUCCESS} from './index';

export const getData = () =>  async (dispatch, getState) => {
    const {data} = await axios("https://rickandmortyapi.com/api/character")
   dispatch({
        type: GOT_USERS_SUCCESS,
        payload: data.results
    });
}
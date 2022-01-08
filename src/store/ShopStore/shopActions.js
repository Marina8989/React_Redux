import axios from "axios";
import { SHOP_PENDING, SHOP_SUCCESS, SHOP_ERROR } from "./shopReducer";


export const getData = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: SHOP_PENDING
        })
        const {data} = await axios("https://fakestoreapi.com/products")
        dispatch({
            type: SHOP_SUCCESS,
            payload: data
        })

    }catch(err){
       dispatch({
           type: SHOP_ERROR,
           payload: err
       })
    }
}



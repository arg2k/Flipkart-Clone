import axios from "axios";
import * as actionTypes from '../constants/cartConstant';

const url = 'http://13.233.30.28:8000';

export const addItemToCart = (id) => async(dispatch) => {
    try
    {
        const {data} = await axios.get(`${url}/item/${id}`);
        //console.log(data);
        dispatch({type: actionTypes.ADD_ITEM_TO_CART, payload: data});
    }
    catch(error)
    {
        console.log('unable to call api for adding item');
    }
}

export const removeItemFromCart = (id) => (dispatch) => {
    dispatch({type: actionTypes.REMOVE_ITEM_FROM_CART, payload: id});
}
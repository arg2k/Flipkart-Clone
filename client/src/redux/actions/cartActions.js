import axios from "axios";
import * as actionTypes from '../constants/cartConstant';
import Config from "../../constants/data.js";
// const url = '${Config.ip}';

export const addItemToCart = (id) => async(dispatch) => {
    try
    {
        const {data} = await axios.get(`${Config.ip}:8000/item/${id}`);
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
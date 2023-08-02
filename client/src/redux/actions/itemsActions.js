import axios from "axios";
import * as action from '../constants/itemConstant';
import Config from "../../constants/data.js";
// const url = '${Config.ip}';

export const getItems = () => async (dispatch) => {
    try 
    {
        const {data} = await axios.get(`${Config.ip}:8000/items`);
        dispatch({type: action.GET_ITEMS_SUCCESS, payload: data });
    }
    catch(err)
    {
        dispatch({type: action.GET_ITEMS_FAILURE, payload: err.response });
        //console.log('failed to call items api');
    }
}

export const getItemInfo = (id) => async (dispatch) => {
    try 
    {
        const {data} = await axios.get(`${Config.ip}:8000/item/${id}`);
        dispatch({type: action.GET_ITEM_INFO_SUCCESS, payload: data });
    }
    catch(err)
    {
        dispatch({type: action.GET_ITEM_INFO_FAILURE, payload: err.response });
        //console.log('failed to call items api'); 
    }
}
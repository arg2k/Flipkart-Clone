import axios from "axios";
import * as action from '../constants/itemConstant';
<<<<<<< HEAD
const url = 'http://13.233.30.28:8000';
=======
const url = 'http://localhost:8000';
>>>>>>> 94b663f6fafc0c0552a736e1a5443d6bf0a9b278

export const getItems = () => async (dispatch) => {
    try 
    {
        const {data} = await axios.get(`${url}/items`);
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
        const {data} = await axios.get(`${url}/item/${id}`);
        dispatch({type: action.GET_ITEM_INFO_SUCCESS, payload: data });
    }
    catch(err)
    {
        dispatch({type: action.GET_ITEM_INFO_FAILURE, payload: err.response });
        //console.log('failed to call items api'); 
    }
}
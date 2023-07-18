import * as actionType from '../constants/itemConstant';

export const getItemsReducer = (state = {items: []}, action) => {
    switch(action.type) 
    {
        case actionType.GET_ITEMS_SUCCESS:
            return { items: action.payload }
        case actionType.GET_ITEMS_FAILURE:
            return { error: action.payload }
        default:
            return state
    }
};

export const getItemInfoReducer = (state = {item: {}}, action) => {
    switch(action.type) 
    {
        case actionType.GET_ITEM_INFO_SUCCESS:
            return { item: action.payload }
        case actionType.GET_ITEM_INFO_FAILURE:
            return { error: action.payload }
        default:
            return state
    }
};
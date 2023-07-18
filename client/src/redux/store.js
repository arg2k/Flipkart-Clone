import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getItemsReducer,getItemInfoReducer } from './reducers/itemReducer';
import { addRemoveItemToFromCartReducer } from './reducers/addToCartReducer';

const reducer = combineReducers({
    getItems: getItemsReducer,
    getItemInfo: getItemInfoReducer,
    addItemToCart: addRemoveItemToFromCartReducer
})
const middleware = [thunk];
const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
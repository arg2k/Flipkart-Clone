import * as actionTypes from "../constants/cartConstant";

export const addRemoveItemToFromCartReducer = (
  state = { cartItems: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      const item = action.payload;
      const alreadypresent = state.cartItems.find(
        (present) => present.id === item.id
      );
      if (alreadypresent) {
        return;
      }
      return { ...state, cartItems: [...state.cartItems, item] };

    case actionTypes.REMOVE_ITEM_FROM_CART:
        const id = action.payload;
        return{...state,cartItems: [...state.cartItems.filter(present => present.id!==id)]}  

    default:
      return state;
  }
};

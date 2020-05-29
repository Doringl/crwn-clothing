import CartActionTypes from './cartTypes';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearAllItem = () => ({
  type: CartActionTypes.CLEAR_ALL_ITEM,
});

export const toggleDropDownHidden = () => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_HIDDEN,
});

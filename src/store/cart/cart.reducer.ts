import { CART_ACTIONS, CartState } from './cart.types';
import { AnyAction } from 'redux';

const INIT_STATE: CartState = {
  cartStat: false,
  cartItems: [],
};

export const cartReducer = (state = INIT_STATE, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS.SET_CART_STAT:
      return {
        ...state,
        cartStat: payload,
      };
    default:
      return state;
  }
};

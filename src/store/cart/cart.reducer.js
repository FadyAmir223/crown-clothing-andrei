import { CART_ACTIONS } from './cart.types';

const INIT_STATE = {
  cartStat: false,
  cartItems: [],
};

export const cartReducer = (state = INIT_STATE, action = {}) => {
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

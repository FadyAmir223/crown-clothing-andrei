import { AnyAction } from 'redux';
import { CartState } from './cart.types';
import { setCartStat, setCartItems } from './cart.action';

const INIT_STATE: CartState = {
  cartStat: false,
  cartItems: [],
};

export const cartReducer = (
  state = INIT_STATE,
  action: AnyAction
): CartState => {
  if (setCartStat.match(action))
    return {
      ...state,
      cartStat: action.payload,
    };

  if (setCartItems.match(action))
    return {
      ...state,
      cartItems: action.payload,
    };

  return state;
};

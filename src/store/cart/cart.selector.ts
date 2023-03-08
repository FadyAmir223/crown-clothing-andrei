import { createSelector } from 'reselect';
import { CartState } from './cart.types';

const selectCartReducer = (state): CartState => state.cart;

export const selectCartStat = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartStat
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
);

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, curr) => total + curr.quantity * curr.price, 0)
);

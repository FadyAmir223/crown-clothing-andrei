import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

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

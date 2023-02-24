import { CART_ACTIONS } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCartStat = (bool) =>
  createAction(CART_ACTIONS.SET_CART_STAT, bool);

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  const newCartItems = existingCartItem
    ? cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    : [...cartItems, { ...productToAdd, quantity: 1 }];
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

export const decrementSelectedItem = (cartItems, id) => {
  let newCartItems;
  cartItems.forEach((cartItem) => {
    if (cartItem.id === id)
      if (cartItem.quantity === 1) deleteSelectedItem(id);
      else {
        newCartItems = cartItems.map((_cartItem) =>
          _cartItem.id === id
            ? { ..._cartItem, quantity: _cartItem.quantity - 1 }
            : _cartItem
        );
        return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
      }
  });
};

export const deleteSelectedItem = (cartItems, id) => {
  const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItems);
};

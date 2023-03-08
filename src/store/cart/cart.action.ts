import { CartItem, CART_ACTIONS } from './cart.types';
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';

type SetCartStat = ActionWithPayload<CART_ACTIONS.SET_CART_STAT, boolean>;

type SetCartItems = ActionWithPayload<CART_ACTIONS.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTIONS.SET_CART_ITEMS, cartItems)
);

export const setCartStat = withMatcher(
  (bool: boolean): SetCartStat => createAction(CART_ACTIONS.SET_CART_STAT, bool)
);

export const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
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
  return setCartItems(newCartItems);
};

export const decrementSelectedItem = (cartItems: CartItem[], id: number) => {
  let newCartItems: CartItem[];
  cartItems.forEach((cartItem) => {
    if (cartItem.id === id)
      if (cartItem.quantity === 1)
        newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
      else {
        newCartItems = cartItems.map((_cartItem) =>
          _cartItem.id === id
            ? { ..._cartItem, quantity: _cartItem.quantity - 1 }
            : _cartItem
        );
      }
    return newCartItems;
  });
  return setCartItems(newCartItems);
};

export const deleteSelectedItem = (cartItems: CartItem[], id: number) => {
  const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  return setCartItems(newCartItems);
};

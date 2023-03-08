import { CategoryItem } from '../categories/category.types';

export enum CART_ACTIONS {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_STAT = 'cart/SET_CART_STAT',
}

export type CartItems = CategoryItem & {
  quantity: number;
};

export type CartState = {
  cartStat: boolean;
  cartItems: [];
};

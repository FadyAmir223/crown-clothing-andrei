import { CategoryItem } from '../categories/category.types';

export enum CART_ACTIONS {
  SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
  SET_CART_STAT = 'cart/SET_CART_STAT',
}

export type CartState = {
  readonly cartStat: boolean;
  readonly cartItems: CartItem[];
};

export type CartItem = CategoryItem & {
  quantity: number;
};

import { useReducer } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({
  cartStat: false,
  cartItems: [],
  totalQuantity: 0,
  setCartStat: () => null,
  addCartItem: () => null,
  decrementSelectedItem: () => null,
  deleteSelectedItem: () => null,
});

const CART_ACTIONS = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_STAT: 'SET_CART_ITEMS',
};

const INIT_STATE = {
  cartStat: false,
  cartItems: [],
  totalQuantity: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.SET_CART_STAT:
      return {
        ...state,
        cartStat: payload,
      };
    default:
      throw new Error(`undefined type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INIT_STATE),
    { cartStat, cartItems, totalQuantity } = state,
    updateCartItemsReducer = (cartItems) => {
      const totalQuantity = cartItems.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );

      const payload = { totalQuantity, cartItems };
      dispatch({ type: CART_ACTIONS.SET_CART_ITEMS, payload });
    },
    setCartStat = () => {
      const payload = { cartStat: !cartStat };

      dispatch({
        type: CART_ACTIONS.SET_CART_STAT,
        payload,
      });
    };

  const addCartItem = (productToAdd) => {
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
    updateCartItemsReducer(newCartItems);
  };

  const decrementSelectedItem = (id) => {
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
          updateCartItemsReducer(newCartItems);
        }
    });
  };

  const deleteSelectedItem = (id) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    cartStat,
    setCartStat,
    cartItems,
    addCartItem,
    totalQuantity,
    decrementSelectedItem,
    deleteSelectedItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

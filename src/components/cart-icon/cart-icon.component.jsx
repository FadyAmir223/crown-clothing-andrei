import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconSvg,
} from './cart-icon.style';

const CartIcon = () => {
  const { setCartStat, totalQuantity } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => {
        setCartStat((prevCartStat) => !prevCartStat);
      }}
    >
      <ShoppingIconSvg />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

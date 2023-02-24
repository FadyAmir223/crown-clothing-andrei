import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartStat,
  selectTotalQuantity,
} from '../../store/cart/cart.selector';
import { setCartStat } from '../../store/cart/cart.action';
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconSvg,
} from './cart-icon.style';

const CartIcon = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector(selectTotalQuantity);

  const cartStat = useSelector(selectCartStat);
  const setCartStat_ = () => dispatch(setCartStat(!cartStat));

  return (
    <CartIconContainer onClick={setCartStat_}>
      <ShoppingIconSvg />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

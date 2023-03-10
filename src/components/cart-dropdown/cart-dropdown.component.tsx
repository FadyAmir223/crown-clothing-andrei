import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdowContainer, CartItems } from './cart-dropdown.style';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdowContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdowContainer>
  );
};

export default CartDropdown;

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { CartDropdowContainer, CartItems } from './cart-dropdown.style';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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

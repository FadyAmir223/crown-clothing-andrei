import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import {
  CehckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.style';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <CehckoutContainer>
      <CheckoutHeader>
        {['product', 'description', 'quantity', 'price', 'remove'].map(
          (header) => (
            <HeaderBlock key={header}>
              <span>{header}</span>
            </HeaderBlock>
          )
        )}
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length !== 0 && <Total>TOTAL: ${totalPrice}</Total>}
      <PaymentForm />
    </CehckoutContainer>
  );
};

export default Checkout;

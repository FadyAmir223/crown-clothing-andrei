import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../store/cart/cart.selector';
import './checkout.style.scss';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  // const [totalPrice, setTotalPrice] = useState(0);

  const totalPrice = useSelector(selectTotalPrice);
  // useEffect(() => {
  //   setTotalPrice(
  //     cartItems.reduce((total, curr) => total + curr.quantity * curr.price, 0)
  //   );
  // }, [cartItems]);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {['product', 'description', 'quantity', 'price', 'remove'].map(
          (header) => (
            <div className="block-header" key={header}>
              <span>{header}</span>
            </div>
          )
        )}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length !== 0 && (
        <span className="total">TOTAL: ${totalPrice}</span>
      )}
      <PaymentForm />
    </div>
  );
};

export default Checkout;

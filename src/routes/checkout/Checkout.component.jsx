import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import './checkout.style.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((total, curr) => total + curr.quantity * curr.price, 0)
    );
  }, [cartItems]);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        {['product', 'description', 'quantity', 'price', 'remove'].map(
          (header) => (
            <div className='block-header' key={header}>
              <span>{header}</span>
            </div>
          )
        )}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartItems.length !== 0 && (
        <span className='total'>TOTAL: ${totalPrice}</span>
      )}
    </div>
  );
};

export default Checkout;

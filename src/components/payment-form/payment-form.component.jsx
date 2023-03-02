import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrUser } from '../../store/user/user.selector';
import Button from '../button/button.component';
import { FormContainer, PaymentFormContainer } from './payment-form.style';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const currUser = useSelector(selectCurrUser);
  const totalPrice = useSelector(selectTotalPrice);
  console.log(currUser);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!(stripe && elements)) return;

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currUser ? currUser.displayName : 'guest',
        },
      },
    });

    if (paymentResult.error) alert(paymentResult.error);
    else if (paymentResult.paymentIntent.status === 'succeeded')
      alert('Payment Successful');
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button buttonType="inverted">Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

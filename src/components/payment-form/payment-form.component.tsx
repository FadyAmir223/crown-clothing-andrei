import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElement } from '@stripe/stripe-js';
import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrUser } from '../../store/user/user.selector';
import { BUTTON_TYPES, getButton } from '../button/button.component';
import {
  FormContainer,
  PaymentFormContainer,
  CardElement_,
} from './payment-form.style';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const currUser = useSelector(selectCurrUser);
  const totalPrice = useSelector(selectTotalPrice);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const InvertedBtn = getButton(BUTTON_TYPES.inverted);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(stripe && elements)) return;

    setIsProcessingPayment(true);

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

    const isCardElement = (
      card: StripeCardElement | null
    ): card is StripeCardElement => card !== null;

    let cardElement = elements.getElement(CardElement);
    if (!isCardElement(cardElement)) return;

    const username = currUser ? currUser.displayName : 'guest';
    if (username === null) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: username,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error);
    else if (paymentResult.paymentIntent.status === 'succeeded')
      alert('Payment Successful');
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement_ />
        <InvertedBtn disabled={isProcessingPayment}>Pay Now</InvertedBtn>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;

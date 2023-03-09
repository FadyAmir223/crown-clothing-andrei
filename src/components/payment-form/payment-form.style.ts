import { CardElement } from '@stripe/react-stripe-js';
import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
  `,
  CardElement_ = styled(CardElement)`
    margin-bottom: 10px;
  `;

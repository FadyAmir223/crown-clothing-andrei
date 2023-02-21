import React, { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from './sign-in-form.style';

const defaultFormData = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [userData, setUserData] = useState(defaultFormData);
  const { email, password } = userData;

  const signInGoogleUserPopUp = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setUserData(defaultFormData);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user assciated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>already have an account?</h2>
      <span>enter email and password - sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOpt={{
            required: true,
            type: 'email',
            name: 'email',
            id: 'email_',
            onChange: handleChange,
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOpt={{
            required: true,
            type: 'password',
            name: 'password',
            id: 'password_',
            onChange: handleChange,
            value: password,
          }}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType='google'
            type='button'
            onClick={signInGoogleUserPopUp}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

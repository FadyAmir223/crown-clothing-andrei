import React, { useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { SignINContainer } from './sign-up-form.style';

const defaultFormData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(defaultFormData);
  const { displayName, email, password, confirmPassword } = userData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        setUserData(defaultFormData);
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    }
  };

  return (
    <SignINContainer>
      <h2>don't have an account?</h2>
      <span>enter email and password - sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          inputOpt={{
            required: true,
            type: 'text',
            name: 'displayName',
            id: 'displayName',
            onChange: handleChange,
            value: displayName,
          }}
        />

        <FormInput
          label='Email'
          inputOpt={{
            required: true,
            type: 'email',
            name: 'email',
            id: 'email',
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
            id: 'password',
            onChange: handleChange,
            value: password,
          }}
        />

        <FormInput
          label='confirmPassword'
          inputOpt={{
            required: true,
            type: 'password',
            name: 'confirmPassword',
            id: 'confirmPassword',
            onChange: handleChange,
            value: confirmPassword,
          }}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignINContainer>
  );
};

export default SignUpForm;

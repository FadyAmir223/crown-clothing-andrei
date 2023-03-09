import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { SignINContainer } from './sign-up-form.style';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(defaultFormData);
  const { displayName, email, password, confirmPassword } = userData;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const userCredential = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        if (!userCredential) return;
        await createUserDocumentFromAuth(userCredential.user, { displayName });
        setUserData(defaultFormData);
      } catch (error) {
        if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD)
          alert('incorrect password for email');
        if ((error as AuthError).code === AuthErrorCodes.INVALID_EMAIL)
          alert('no user associated with this email');
        console.log(error);
      }
    }
  };

  return (
    <SignINContainer>
      <h2>don't have an account?</h2>
      <span>enter email and password - sign up</span>
      <form onSubmit={(e) => handleSubmit}>
        <FormInput
          label="Name"
          required
          type="text"
          name="displayName"
          id="displayName"
          onChange={(e) => handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="confirmPassword"
          required
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignINContainer>
  );
};

export default SignUpForm;

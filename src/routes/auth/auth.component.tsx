import { useEffect } from 'react';
import {
  auth,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/SignUpForm.component';
import SignInForm from '../../components/sign-in-form/SignInForm.component';
import { AuthenticatioContainer } from './auth.style';

const Auth = () => {
  useEffect(() => {
    const _getRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) createUserDocumentFromAuth(response.user);
    };
    _getRedirectResult();
  }, []);

  return (
    <AuthenticatioContainer>
      <SignUpForm />
      <SignInForm />
    </AuthenticatioContainer>
  );
};

export default Auth;

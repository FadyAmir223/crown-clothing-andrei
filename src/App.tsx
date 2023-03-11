import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrUser } from './store/user/user.action';
import Spinner from './components/spinner/spinner.component';
import { GlobalStyle } from './main.style';

const Home = lazy(() => import('./routes/home/Home.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/Checkout.component'));
const Auth = lazy(() => import('./routes/auth/auth.component'));
const Navigation = lazy(
  () => import('./routes/navigation/Navigation.component')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrUser(user));
      if (user) createUserDocumentFromAuth(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

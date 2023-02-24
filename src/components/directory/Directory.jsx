// import { Routes, Route } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import Home from '../../routes/home/Home.component';
// import Navigation from '../../routes/navigation/Navigation.component';
// import Auth from '../../routes/auth/auth.component';
// import Shop from '../../routes/shop/shop.component';
// import Checkout from '../../routes/checkout/Checkout.component';
// import { onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';
// import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
// import { setCurrUser } from '../../store/user/user.action';

// const Directory = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedListener((user) => {
//       dispatch(setCurrUser(user));
//       if (user) createUserDocumentFromAuth(user);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path="shop/*" element={<Shop />} />
//         <Route path="auth" element={<Auth />} />
//         <Route path="/checkout" element={<Checkout />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Directory;

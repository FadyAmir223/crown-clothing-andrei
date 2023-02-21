import Home from '../../routes/home/Home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../../routes/navigation/Navigation.component';
import Auth from '../../routes/auth/auth.component';
import Shop from '../../routes/shop/shop.component';
import Checkout from '../../routes/checkout/Checkout.component';

const Directory = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default Directory;

import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrUser } from '../../store/user/user.selector';
import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from './navigation.styles';
import { selectCartStat } from '../../store/cart/cart.selector';

const Navigation = () => {
  const currUser = useSelector(selectCurrUser);
  const cartStat = useSelector(selectCartStat);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crown className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>
          {currUser ? (
            <Link to="auth" className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to="auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </NavLinksContainer>
        {cartStat && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;

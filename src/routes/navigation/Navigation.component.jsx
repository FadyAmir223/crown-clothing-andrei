import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as Crown } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from './navigation.styles';

const Navigation = () => {
  const { currUser } = useContext(UserContext),
    { cartStat } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Crown className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='shop'>SHOP</NavLink>
          {currUser ? (
            <Link to='auth' className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <Link to='auth' className='nav-link'>
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

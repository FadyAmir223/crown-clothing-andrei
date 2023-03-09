import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItem,
  decrementSelectedItem,
  deleteSelectedItem,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Arrow,
  Value,
} from './checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartItem_ = (item) => dispatch(addCartItem(cartItems, item));

  const decrementSelectedItem_ = (item) =>
    dispatch(decrementSelectedItem(cartItems, item));

  const deleteSelectedItem_ = (item) =>
    dispatch(deleteSelectedItem(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => decrementSelectedItem_(id)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addCartItem_(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={() => deleteSelectedItem_(id)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

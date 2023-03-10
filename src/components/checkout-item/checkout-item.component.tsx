import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItem,
  decrementSelectedItem,
  deleteSelectedItem,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem } from '../../store/cart/cart.types';
import { CategoryItem } from '../../store/categories/category.types';
import {
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Arrow,
  Value,
} from './checkout-item.style';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartItem_ = (item: CategoryItem) =>
    dispatch(addCartItem(cartItems, item));

  const decrementSelectedItem_ = (itemId: number) =>
    dispatch(decrementSelectedItem(cartItems, itemId));

  const deleteSelectedItem_ = (itemId: number) =>
    dispatch(deleteSelectedItem(cartItems, itemId));

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

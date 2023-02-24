import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItem,
  decrementSelectedItem,
} from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  // const { addCartItem, decrementSelectedItem, deleteSelectedItem } =
  //   useContext(CartContext);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addCartItem_ = (item) => dispatch(addCartItem(cartItems, item));

  const decrementSelectedItem_ = (item) =>
    dispatch(decrementSelectedItem(cartItems, item));

  const deleteSelectedItem_ = (item) =>
    dispatch(deleteSelectedItem(cartItems, item));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementSelectedItem_(id)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addCartItem_(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteSelectedItem_(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

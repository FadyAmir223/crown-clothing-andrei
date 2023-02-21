import { CartItemContainer, ItemDetails, Name } from './cart-item.style';

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

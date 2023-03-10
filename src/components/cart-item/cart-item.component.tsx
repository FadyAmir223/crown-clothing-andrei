import { CartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails, Name } from './cart-item.style';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

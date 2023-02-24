import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const addCartItem_ = (item) => dispatch(addCartItem(cartItems, item));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={() => addCartItem_(product)}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

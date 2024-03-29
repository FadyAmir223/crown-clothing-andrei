import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.style';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product,
    { addCartItem } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType='inverted' onClick={() => addCartItem(product)}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

import { useNavigate } from 'react-router-dom';
import {
  CategoryContainer,
  BackgroundImage,
  Body,
} from './category-item.style';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const navigateHandler = (dest) => navigate(`/shop/${dest}`);

  return (
    <CategoryContainer onClick={() => navigateHandler(title)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>shop now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;

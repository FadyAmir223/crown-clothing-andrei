import { useNavigate } from 'react-router-dom';
import { CategoryData } from '../../routes/home/Home.component';
import { Category } from '../../store/categories/category.types';
import {
  CategoryContainer,
  BackgroundImage,
  Body,
} from './category-item.style';

type CategoryItemProps = {
  category: CategoryData;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const navigateHandler = (dest: string) => navigate(`/shop/${dest}`);

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

import { Link } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryItem } from '../../store/categories/category.types';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './category-preview.style.js';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`${title}`}>
          <Title>{title.toLocaleUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

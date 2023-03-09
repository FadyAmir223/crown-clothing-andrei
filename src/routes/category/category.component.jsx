import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import { CategoryContainer, CategoryTitle } from './category.style';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        products && (
          <CategoryContainer>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </CategoryContainer>
        )
      )}
    </>
  );
};

export default Category;

import CategoryItem from '../../components/category-item/category-item.component';
import { Outlet } from 'react-router-dom';
import { CategoriesContainer } from './home.style';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];

const Home = () => {
  return (
    <>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </CategoriesContainer>
      <Outlet />
    </>
  );
};

export default Home;

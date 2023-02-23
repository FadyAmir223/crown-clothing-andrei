import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategoriesMap } from '../../store/categories/cateogyr.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //   addCollectionAndDocuments('categories', SHOP_DATA);

    (async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoriesMap));
    })();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

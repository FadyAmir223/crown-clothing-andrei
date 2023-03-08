import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.category;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) => category.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, cateogry) => {
      const { title, items } = cateogry;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoryReducer): boolean => categoryReducer.isLoading
);

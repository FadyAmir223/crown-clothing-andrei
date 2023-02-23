import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.category;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (category) => category.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, cateogry) => {
      const { title, items } = cateogry;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

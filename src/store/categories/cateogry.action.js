import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS } from './category.types';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORY_ACTIONS.SET_CATEGORIES, categoriesArray);

import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS } from './category.types';

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORY_ACTIONS.SET_CATEGORIES_MAP, categoriesMap);

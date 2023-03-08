import { AnyAction } from 'redux';
import { Category } from './category.types';
import {
  fetchCategoriesStart,
  fetchCategorieSuccess,
  fetchCategoriesFail,
} from './cateogry.action';
export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INIT_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (
  state = INIT_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action))
    return {
      ...state,
      isLoading: true,
    };

  if (fetchCategorieSuccess.match(action))
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };

  if (fetchCategoriesFail.match(action))
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };

  return state;
};

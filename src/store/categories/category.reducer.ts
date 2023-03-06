import { CATEGORY_ACTIONS, Category } from './category.types';
import { CategoryActions } from './cateogry.action';

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
  action = {} as CategoryActions
) => {
  switch (action.type) {
    case CATEGORY_ACTIONS.FETCH_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTIONS.FETCH_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CATEGORY_ACTIONS.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};

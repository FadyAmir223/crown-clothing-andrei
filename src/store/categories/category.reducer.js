import { CATEGORY_ACTIONS } from './category.types';

const INIT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoryReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTIONS.FETCH_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTIONS.FETCH_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CATEGORY_ACTIONS.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    default:
      return state;
  }
};

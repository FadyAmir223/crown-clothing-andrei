import { CATEGORY_ACTIONS } from './category.types';

const INIT_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTIONS.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};

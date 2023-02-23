import { CATEGORY_ACTIONS } from './category.types';

const INIT_STATE = {
  categories: [],
};

export const categoryReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

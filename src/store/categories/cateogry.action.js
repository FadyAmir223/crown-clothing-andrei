import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS } from './category.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORY_START);

export const fetchCategorieSuccess = (categories) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORY_SUCCESS, categories);

export const fetchCategoriesFail = (error) =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORY_FAIL, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategorieSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFail(error));
  }
};

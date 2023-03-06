import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  createAction,
  Action,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTIONS, Category } from './category.types';

type FetchCategoriesStart = Action<CATEGORY_ACTIONS.FETCH_CATEGORY_START>;

type FetchCategorieSuccess = ActionWithPayload<
  CATEGORY_ACTIONS.FETCH_CATEGORY_SUCCESS,
  Category[]
>;

type FetchCategoriesFail = ActionWithPayload<
  CATEGORY_ACTIONS.FETCH_CATEGORY_FAIL,
  Error
>;

export type CategoryActions =
  | FetchCategoriesStart
  | FetchCategorieSuccess
  | FetchCategoriesFail;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORY_START);

export const fetchCategorieSuccess = (
  categories: Category[]
): FetchCategorieSuccess =>
  createAction(CATEGORY_ACTIONS.FETCH_CATEGORY_SUCCESS, categories);

export const fetchCategoriesFail = (error: Error): FetchCategoriesFail =>
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

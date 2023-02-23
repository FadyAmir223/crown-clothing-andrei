import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS } from './user.types';

export const setCurrUser = (user) =>
  createAction(USER_ACTIONS.SET_CURR_USER, user);

import { User } from 'firebase/auth';
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS } from './user.types';

type SetCurrUser = ActionWithPayload<USER_ACTIONS.SET_CURR_USER, User | null>;

export const setCurrUser = withMatcher(
  (user: User | null): SetCurrUser =>
    createAction(USER_ACTIONS.SET_CURR_USER, user)
);

import { AnyAction } from 'redux';
import { UserState } from './user.types';
import { setCurrUser } from './user.action';

const INIT_STATE: UserState = { currUser: null };

export const userReducer = (
  state = INIT_STATE,
  action: AnyAction
): UserState => {
  if (setCurrUser.match(action))
    return {
      ...state,
      currUser: action.payload,
    };
  return state;
};

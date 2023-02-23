import { USER_ACTIONS } from './user.types';

const INIT_STATE = { currUser: null };

export const userReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTIONS.SET_CURR_USER:
      return {
        ...state,
        currUser: payload,
      };
    default:
      return state;
  }
};

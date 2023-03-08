import { Middleware } from 'redux';
import { RootState } from '../store';

export const loggerCustom: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) return next(action);

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currState: ', store.getState());

    next(action);

    console.log('nextState: ', store.getState());
  };

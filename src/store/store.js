import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const loggerCustom = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currState: ', store.getState());

  next(action);

  console.log('nextState: ', store.getState());
};

const middleWares = [logger];

const composedEnhancer = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancer);

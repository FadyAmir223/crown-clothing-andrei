import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
// import { loggerCustom } from './logger/logger';
import { createTransform } from 'redux-persist';

// https://github.com/rt2zz/redux-persist/blob/master/docs/api.md

const cartFilter = createTransform(
  (inboundState) => {
    const { cartStat, ...cartWithoutOpen } = inboundState;
    return cartWithoutOpen;
  },
  (outboundState) => outboundState,
  { whitelist: ['cart'] }
);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
  transforms: [cartFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
); // process.env.NODE_ENV !== 'production'

// use Redux DevTools
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);

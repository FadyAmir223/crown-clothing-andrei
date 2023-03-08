import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createTransform } from 'redux-persist';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';
import { CartState } from './cart/cart.types';
// import { loggerCustom } from './logger/logger';

// https://github.com/rt2zz/redux-persist/blob/master/docs/api.md

export type RootState = ReturnType<typeof rootReducer>;

const cartFilter = createTransform(
  (inboundState) => {
    const { cartStat, ...cartWithoutOpen } = inboundState as CartState;
    return cartWithoutOpen;
  },
  (outboundState) => outboundState,
  { whitelist: ['cart'] }
);

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  // blacklist: ['user'],
  whitelist: ['cart'],
  transforms: [cartFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));
// process.env.NODE_ENV !== 'production'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// use Redux DevTools
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);

// ----------- import Packs
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

// ----------- import Internals
import persistedReducer from './reducers/persistReducers';
import asyncDispatchMiddleware from './midAsync';
import loggerMiddleware from './midLogger';

const middlewares = [asyncDispatchMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

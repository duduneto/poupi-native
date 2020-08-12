import { createStore, applyMiddleware } from 'redux';
import condStorage from '../condPacks/storage';
// import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// import Internals
import reducers from './rootReducer';

const persistConfig = {
  storage: condStorage,
  whitelist: ['rdPersists'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const asyncDispatchMiddleware = store => next => action => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

  next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
};

const middlewares = [asyncDispatchMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = store => next => action => {
    const { type, rdName, rdPropName, asyncName } = action;
    const condRdPropName = rdPropName ? `${rdName}{${rdPropName}}` : rdName;
    const condType = type.replace('_', '&').split('&')[0] === 'ASYNC';
    const condActionName = condType ? asyncName : type;
    const condRdName = condRdPropName ? `${condRdPropName}` : condActionName;
    const condTitle = condType ? type : 'SYNC';
    const Names = `${condTitle} => ${condRdName}`;

    const result = next(action);

    const consoleValue = { ACTION: action, STATE: store.getState() };
    console.info(Names, consoleValue);

    return result;
  };
  middlewares.push(logger);
}

// const store = createStore(reducers, applyMiddleware(...middlewares));
const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
// export {store};

import { createStore, applyMiddleware } from 'redux';
import condStorage from '../condPacks/storage';
// import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// import Internals
import reducers from './rootReducer';

const persistConfig = {
  storage: condStorage,
  key: 'root',
  whitelist: ['rdRoute', 'rdAuthUser', 'rdContent', 'rdPermissionAdm'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

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

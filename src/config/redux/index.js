// import Packages
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import async from './async';

const sagaMiddleware = createSagaMiddleware();

// let middlewares = [];
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  let logger = store => next => action => {
    console.groupCollapsed('SYNC =>', action.rdName);
    console.info('dispathing', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
  };
  middlewares.push(logger);
}

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(async);

export default store;

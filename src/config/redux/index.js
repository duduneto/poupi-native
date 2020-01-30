// import Packages
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { createWhitelistFilter } from "redux-persist-transform-filter";

// import Internals
import reducers from "./rootReducer";
import async from "./async";

const persistConfig = {
  storage,
  key: "root",
  // whitelist: ['allContent']
  transforms: [createWhitelistFilter(["rdAuthUser", "rdContent"])]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

// let middlewares = [];
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  let logger = store => next => action => {
    console.groupCollapsed("SYNC =>", action.rdName);
    console.info("dispathing", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd();
    return result;
  };
  middlewares.push(logger);
}

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);

sagaMiddleware.run(async);

let persistor = persistStore(store);

export { store, persistor };

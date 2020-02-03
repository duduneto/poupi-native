// import Packages
import { createStore, applyMiddleware, compose } from "redux";
import { Platform } from "react-native";
import createSagaMiddleware from "redux-saga";
import webStorage from "redux-persist/lib/storage";
// import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// import Internals
import reducers from "./rootReducer";
import async from "./async";

let AsyncStorage;

let condStorage = Platform.OS === "web" ? webStorage : AsyncStorage;
const persistConfig = {
  storage: condStorage,
  key: "root",
  whitelist: ["rdAuthUser"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

// let middlewares = [];
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  let logger = store => next => action => {
    let groupName = action.callName ? `${action.type} =>` : "SYNC =>";
    let dispatchingName = `${groupName} dispatching`;
    let nextStateName = `${groupName} next state`;

    console.groupCollapsed(groupName, action.rdName);
    console.info(dispatchingName, action);
    let result = next(action);
    console.log(nextStateName, store.getState());
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

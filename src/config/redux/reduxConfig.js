import { createStore, applyMiddleware, compose } from "redux";
import webStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// import Internals
import reducers from "./rootReducer";


const persistConfig = {
  storage: webStorage,
  key: "root",
  whitelist: ["rdRoute", "rdProject", "rdStyles", "rdElements"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const logger = (store) => (next) => (action) => {
    const { type, rdName, rdPropName } = action;
    const condRdPropName = rdPropName ? `${rdName}{${rdPropName}}` : rdName;
    const condRdName = condRdPropName ? `${condRdPropName}` : type;
    const condType = type.replace("_", "&").split("&")[0] === "ASYNC";
    const condTitle = condType ? type : "SYNC";
    const Names = `${condTitle} => ${condRdName}`;

    const result = next(action);

    const consoleValue = { ACTION: action, STATE: store.getState() };
    console.info(Names, consoleValue);

    return result;
  };
  middlewares.push(logger);
}

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

export { store, persistor };

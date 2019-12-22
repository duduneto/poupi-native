import { createStore, applyMiddleware, compose } from "redux";
import INITIAL_STATE from "./initialState";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_REDUCER":
      return { ...state, [action.rdName]: action.value };

    default:
      return state;
  }
};

let middlewares = [];

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
  reducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);

export default store;

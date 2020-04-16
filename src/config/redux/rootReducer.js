// import Packs
import webStorage from "redux-persist/lib/storage";

// import Internals
import initialState from "./initialState";
import actions from "../../useMorfos/useCRUD/actions";

function allActions(state, action) {
  const allSyncActions = {
    ...actions(state, action),

    CLEAR_ALL() {
      webStorage.removeItem("persist:root");

      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

const reducers = [allActions];

export default function reducer(state = initialState, action) {
  const newState = state;

  return reducers.reduce((s, r) => r(s, action), newState);
}

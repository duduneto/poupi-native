// import Internals
import initialState from '../../project/initialState';
import actions from '../../useMorfos/useCRUD/actions';
import screens from '../../project/screens';
import { toArr } from '../../useMorfos/utils';
import configReducers from './configReducers';

function allReducers(state, action) {
  const loopReducer = (state, action) => {
    let loopObj = {};
    const refScs = '../../project/screens';

    for (const key in screens) {
      const item = screens[key];
      loopObj = {
        ...loopObj,
        ...require(`../../project/screens/${item}/reducers`).default(
          state,
          action,
        ),
      };
    }
    return loopObj;
  };

  const allSyncActions = {
    ...actions(state, action),
    ...configReducers(state, action),
    ...loopReducer(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

export default (state = initialState, action) => allReducers(state, action);

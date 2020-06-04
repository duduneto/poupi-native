// import Internals
import initialState from './initialState';
import actions from '../../useMorfos/useCRUD/actions';

function allReducers(state, action) {
  const allSyncActions = {
    ...actions(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

export default (state = initialState, action) => allReducers(state, action);

// import Internals
import initialState from '../../../project/initialState';
import actions from '../../../useMorfos/useCRUD/actions';
import base from './baseReducers';
import allApp from '../../allApp/reducers';
import loopScs from './loopScs';

function allReducers(state, action) {
  const allSyncActions = {
    ...actions(state, action),
    ...base(state, action),
    ...allApp(state, action),
    ...loopScs(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

export default (state = initialState, action) => allReducers(state, action);

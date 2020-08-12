// ---------- import Internals
import initialState from '../../project/initialState';
import crudReducers from '../../useMorfos/useCRUD/actions';
import prjReducers from '../../project/screens';
import { toArray } from '../../useMorfos/utils';

export default (state = initialState, action) => {
  let loopObj = {};
  const refSc = '../../project/screens/';

  for (const item in prjReducers) {
    loopObj = {
      ...loopObj,
      ...require(`${refSc}${item}/reducers`).default(state, action),
    };
  }

  const allReducers = {
    ...crudReducers(state, action),
    ...loopObj(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allReducers[action.type] === undefined;
  const condReturn = condCalls ? state : allReducers[action.type]();

  return condReturn(state, action);
};

// import Internals
import initialState from '../../project/initialState';
import actions from '../../useMorfos/useCRUD/actions';
// import prjReducers from '../../project/prjReducers';

function allReducers(state, action) {
  // let loopObj = {};
  // const refSc = '../../project/screens/';

  // for (const key in prjReducers) {
  //   const item = prjReducers[key];
  //   loopObj = {
  //     ...loopObj,
  //     ...require(`${refSc}${item}/reducers.js`).default(state, action),
  //   };
  // }

  const allSyncActions = {
    ...actions(state, action),
    // ...prjReducers(state, action),

    CLEAR_ALL() {
      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

export default (state = initialState, action) => allReducers(state, action);

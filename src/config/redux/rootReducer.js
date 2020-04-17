// import Packs
import {Platform} from 'react-native';
import condStorage from '../condPacks/storage';

// import Internals
import initialState from './initialState';
import actions from '../../useMorfos/useCRUD/actions';

function allReducers(state, action) {
  const allSyncActions = {
    ...actions(state, action),

    CLEAR_ALL() {
      Platform.OS === 'web' && condStorage.removeItem('persist:root');

      return initialState;
    },
  };

  const condCalls = allSyncActions[action.type] === undefined;

  return condCalls ? state : allSyncActions[action.type]();
}

// const reducers = [allActions];

export default (state = initialState, action) => allReducers(state, action);

// export default function reducer(state = initialState, action) {
//   const newState = state;

//   return reducers.reduce((s, r) => r(s, action), newState);
// }

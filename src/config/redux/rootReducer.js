// import Packages
// import { combineReducers } from 'redux';

// import internals
import INITIAL_STATE from './initialState';

import { reducer as sync } from './sync';
import { reducer as async } from './async';

const reducers = [sync, async];

function reducer(state = INITIAL_STATE, action) {
  let newState;

  switch (action.type) {
    default:
      newState = state;
      break;
  }

  return reducers.reduce((s, r) => r(s, action), newState);
}

// export default combineReducers(reducer);
export default reducer;

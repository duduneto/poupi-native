// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set Reducers Groups
  const changes = {
    // ---------- set CHANGE Comps _Name_
    comps_ChangeName: () => {
      return {
        ...state,
        sttName: { ...action.value },
      };
    },
  };

  // ---------- set Reducers Return
  return {
    ...changes,
  };
};

// ---------- set Exports
export default reducers;

// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
const reducers = (state, action) => {
  return {
    // ---------- set CHANGE _Name_
    X0_ChangeName: () => {
      return {
        ...state,
        sttName: { ...action.value },
      };
    },
  };
};

// ---------- set Exports
export default reducers;

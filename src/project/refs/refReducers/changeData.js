// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set CHANGE Name
    X0_ChangeName: () => {
      return {
        ...state,
        sttName: { ...action.value },
      };
    },
  };
};

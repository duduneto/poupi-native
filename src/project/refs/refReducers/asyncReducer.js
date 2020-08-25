// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { asyncRefs /*,mergeDeep, setPath*/ } from '../../../useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => {
  // ---------- set Reducers Groups
  const gets = {};
  const adds = {};
  const updates = {};
  const deletes = {};
  const example = {
    // ---------- set GET X0 _Name
    X0_GET_Name: () => {
      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dataDb = await firestore.collection('coll').get();

        // ---------- set Data to Show
        const dataSuccess = [];
        dataDb.forEach(doc => dataSuccess.push(doc.data()));

        // ------ return SUCCESS
        return action.asyncDispatch({
          type: ref.successName,
          value: dataSuccess,
        });
      };

      // ---------- set Async References
      const ref = asyncRefs(action, asyncFn);

      // ---------- call Async / Mock
      ref.callAsync();

      // ------ set Return
      return { ...state };
    },

    X0_GET_Name_SUCCESS: () => {
      return {
        ...state,
        X0: {
          ...state.X0,
          dataName: action.value,
        },
      };
    },
  };

  // ---------- set Reducers Return
  return {
    ...gets,
    ...adds,
    ...updates,
    ...deletes,
  };
};

// ---------- set Exports
export default reducers;

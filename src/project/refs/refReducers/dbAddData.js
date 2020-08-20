// ---------- import Internals
import { firestore } from '../../../config/firebase/fbConfig';
import { mergeDeep } from '../../../useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => ({
  // ---------- set ADD _Name_
  X0_ADD_Name_START: () => {
    // ---------- set REFs
    const refs = { refName: '_Name_', refCode: 'X0' };

    // ---------- set Dispatch START MSG
    action.asyncDispatch({
      type: 'base_ASYNC_START_MSG',
      refs,
    });

    // ------ set Mock Call
    const condMock = false;
    const callMock = () => {
      // ------ set Mock data
      const dataSuccess = {
        item1: {
          id: 1,
          prop: 'mock1',
        },
        item2: {
          id: 2,
          prop: 'mock1',
        },
      };

      // ------ set Mock Sufix
      refs.refName = refs.refName + '_MOCK';

      // ------ return SUCCESS
      return dispatchSuccess(dataSuccess);
    };

    // ---------- set Async Function
    const asyncFn = async () => {
      // ---------- set Data to Add
      const dataToAdd = {
        userName: 'Pedro Silva',
        image: 'https://source.unsplash.com/200x150/?portrait&boy&1',
        infos: {
          jumpOnboarding: true,
        },
        typeAccount: 'client',
      };

      // ---------- set Async Call
      const refDb = firestore.collection('users').doc();
      dataToAdd.docId = refDb.id;
      dataToAdd.createdAt = firebase.firestore.Timestamp.now();
      const dataSuccess = await refDb.set();

      // ------ return SUCCESS
      return dispatchSuccess(dataSuccess);
    };

    // ---------- call Async With Catch ERROR MSG
    const callAsync = () =>
      asyncFn().catch(err => {
        return action.asyncDispatch({
          type: 'ASYNC_ERROR',
          errMsg: err.message,
          refs,
        });
      });

    // ---------- set Dispatch IF SUCCESS
    function dispatchSuccess(data) {
      // ---------- set Dispatch SUCCESS MSG
      action.asyncDispatch({
        type: 'base_ASYNC_START_MSG',
        refs,
      });

      action.asyncDispatch({
        type: 'X0_ADD_Name_SUCCESS',
        newState: {
          ...state,
          X0: {
            ...state.X0,
            Name: [...action.value],
          },
        },
      });
    }

    // ------ set Return
    condMock ? callMock() : callAsync();
    return { ...state };
  },
});

// ---------- set Exports
export default reducers;

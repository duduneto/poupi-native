// ---------- import Internals
import { firestore, firebase } from '../../../config/firebase/fbConfig';
import { mergeDeep } from '../../../useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => ({
  // ---------- set ADD _Name_
  X0_ADD_Name_START: () => {
    const refCode = 'X0';

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
      dataToAdd.createdAt = Date.now();
      const dataSuccess = await refDb.set();

      // ------ return SUCCESS
      return action.asyncDispatch({
        type: 'ASYNC_STT',
        loggerName: ref.dataName,
        value: {
          ...state,
          [refCode]: {
            ...state[refCode],
            data: dataSuccess,
          },
        },
      });
    };

    // ---------- set Async Reference
    const ref = {
      // ---------- set Names
      pendingName: action.type + '_PENDING',
      errorName: action.type + '_ERROR',
      mockName: action.type + '_MOCK',
      successName: action.type + '_SUCCESS',
      dataName: action.type + '_DATA',

      // ---------- set START Message
      startMsg: () => {
        return action.asyncDispatch({
          type: 'ASYNC_STT',
          loggerName: ref.pendingName,
          value: {
            ...state,
            ...mergeDeep(state[refCode], {
              msgs: { [ref.pendingName]: true, [ref.errorName]: null },
            }),
          },
        });
      },

      // ---------- set ERROR Message
      errorMsg: err => {
        return action.asyncDispatch({
          type: 'ASYNC_STT',
          loggerName: ref.errorName,
          value: {
            ...state,
            ...mergeDeep(state[refCode], {
              msgs: { [ref.pendingName]: false, [ref.errorName]: err.message },
            }),
          },
        });
      },

      // ---------- set SUCCESS Message
      successMsg: () => {
        return action.asyncDispatch({
          type: 'ASYNC_STT',
          loggerName: ref.successName,
          value: {
            ...state,
            ...mergeDeep(state[refCode], {
              msgs: { [ref.pendingName]: false, [ref.errorName]: false },
            }),
          },
        });
      },

      // ---------- set Async Call
      callAsync: () => {
        // ---------- call START Msg
        ref.startMsg();

        // ---------- call Async Function
        return (
          asyncFn()
            // ---------- call ERROR Msg
            .catch(err => ref.errorMsg(err))
            // ---------- call SUCCESS Msg
            .then(() => ref.successMsg())
        );
      },

      // ---------- set Mock Call
      callMock: () => {
        // ---------- set Start Message
        ref.startMsg();

        // ---------- set Mock Data
        const mockData = {
          item1: {
            id: 1,
            prop: 'mock1',
          },
          item2: {
            id: 2,
            prop: 'mock1',
          },
        };

        ref.successMsg();

        return action.asyncDispatch({
          type: 'ASYNC_STT',
          loggerName: ref.mockName,
          value: {
            ...state,
            ...mergeDeep(state[refCode], {
              data: mockData,
              msgs: { [ref.pendingName]: false, [ref.errorName]: false },
            }),
          },
        });
      },
    };

    // ---------- call Async
    ref.callAsync();

    // ------ set Return
    return { ...state };
  },
});

// ---------- set Exports
export default reducers;

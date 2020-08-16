// ---------- import Internals
import { mergeDeep } from '../../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => {
  // ---------- set Dynamic Reducers Desconstructions
  const { sttName } = action;
  const sttSelected = state[sttName];
  const { sttPropName } = action;
  const propValue = [sttSelected][sttPropName];

  // ---------- set Return
  return {
    // ---------- set Dynamic Reducers
    setRoute() {
      return {
        ...state,
        sttRoute: {
          ...state.sttRoute,
          path: action.value,
        },
      };
    },

    // ---------- set Dynamic Reducers
    CHANGE_REDUCER() {
      return { ...state, [sttName]: action.value };
    },

    CHANGE_RD_ARR() {
      sttSelected.push(action.sttArrValue);
      return { ...state, [sttName]: [...sttSelected] };
    },

    CHANGE_RD_IDX() {
      sttSelected[action.sttIdx] = action.value;
      return { ...state, [sttName]: [...sttSelected] };
    },

    CHANGE_RD_PROP() {
      return {
        ...state,
        [sttName]: { ...sttSelected, [sttPropName]: action.value },
      };
    },

    CHANGE_STL_PROP() {
      return {
        ...state,
        [sttName]: {
          ...sttSelected,
          [sttPropName]: {
            ...propValue,
            props: action.value,
          },
        },
      };
    },

    // ---------- set Async Messages
    base_ASYNC_START_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: true, [errorName]: null },
        }),
      };
    },

    base_ASYNC_SUCCESS_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: false, [errorName]: false },
        }),
      };
    },

    base_ASYNC_ERROR_MSG() {
      const { refCode, refName } = action.refs;
      const pendingName = `${refName}_Pending`;
      const errorName = `${refName}_Error`;

      return {
        ...state,
        ...mergeDeep(state[refCode], {
          msgs: { [pendingName]: false, [errorName]: true },
        }),
      };
    },
  };
};

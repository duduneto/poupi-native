// ---------- set Reducers
export default (state, action) => {
  // ---------- set Dynamic Reducers Desconstructions
  const { sttName } = action;
  const sttSelected = state[sttName];
  const { sttPropName } = action;
  const propValue = [sttSelected][sttPropName];
  
  // ---------- set Async Messages Reducers Desconstructions
  const asyncPending = `${action.asyncName}Pending`;
  const asyncError = `${action.asyncName}Error`;
  
  // ---------- set Return
  return {
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
    
    // ---------- set Async Messages Reducers
    ASYNC_START() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: true,
          [asyncError]: null,
        },
      };
    },

    ASYNC_SUCCESS() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: false,
          [asyncError]: false,
        },
      };
    },

    ASYNC_ERROR() {
      return {
        ...state,

        asyncMsgs: {
          [asyncPending]: false,
          [asyncError]: action.value,
        },
      };
    },
  };
};

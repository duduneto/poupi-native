export default (state, action) => {
  const { sttName } = action;
  const sttSelected = state[sttName];
  const { sttPropName } = action;
  const propValue = [sttSelected][sttPropName];

  return {
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
  };
};

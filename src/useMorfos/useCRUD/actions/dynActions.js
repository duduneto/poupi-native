export default (state, action) => {
  const { rdName } = action;
  const rdSelected = state[rdName];
  const { rdPropName } = action;
  const propValue = [rdSelected][rdPropName];

  return {
    CHANGE_REDUCER() {
      return { ...state, [rdName]: action.value };
    },

    CHANGE_RD_ARR() {
      rdSelected.push(action.rdArrValue);
      return { ...state, [rdName]: [...rdSelected] };
    },

    CHANGE_RD_IDX() {
      rdSelected[action.rdIdx] = action.value;
      return { ...state, [rdName]: [...rdSelected] };
    },

    CHANGE_RD_PROP() {
      return {
        ...state,
        [rdName]: { ...rdSelected, [rdPropName]: action.value },
      };
    },

    CHANGE_STL_PROP() {
      return {
        ...state,
        [rdName]: {
          ...rdSelected,
          [rdPropName]: {
            ...propValue,
            props: action.value,
          },
        },
      };
    },
  };
};

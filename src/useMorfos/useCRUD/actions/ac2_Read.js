export default (state, action) => ({
  readPrjList() {
    const { rdProject } = state;

    return {
      ...state,
      rdProject: { ...rdProject, list: action.value },
    };
  },

  readPrjData() {
    const { rdProject } = state;

    return {
      ...state,
      rdProject: { ...rdProject, data: action.value },
    };
  },
});

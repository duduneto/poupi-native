export default (state, action) => ({
  createNewProject() {
    const { rdRoute } = state;
    const { rdProject } = state;
    const { toAction } = action;

    return {
      ...state,
      rdRoute: { ...rdRoute, main: "editor" },
      rdProject: { ...rdProject, selected: toAction },
    };
  },

  addDynItem() {
    const { rdName } = action;
    const rdSelected = state[rdName];

    const propToChange = action.value.docId;
    rdSelected[propToChange] = action.value;
    return { ...state, [rdName]: rdSelected };
  },

  addParentItem() {
    const { parentId, value, arrName } = action.toAction;
    const condRdTxt = arrName === "arrProps" ? "rdStyles" : "rdElements";
    const rdSelected = state[condRdTxt];
    const itemSelected = rdSelected[parentId];
    const newChld = itemSelected[arrName].push(value);

    return {
      ...state,
      [condRdTxt]: { ...rdSelected, [parentId]: { ...itemSelected, newChld } },
    };
  },
});

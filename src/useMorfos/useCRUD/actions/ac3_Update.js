export default (state, action) => {
  const {rdRoute} = state;
  const {rdProject} = state;

  return {
    setRoute() {
      const {value} = action;

      return {...state, rdRoute: value};
    },

    setScActive() {
      return {...state, rdRoute: 'newArr'};
    },

    updateTitlePrj() {
      const {itemId, value} = action;

      const itemSelected = rdProject.selected;

      return {
        ...state,
        rdProject: {
          ...rdProject,
          selected: {...itemSelected, name: value},
        },
      };
    },

    updateTitleLabel() {
      const {itemId, value, condType, styleId} = action;
      const condRdTxt = styleId ? 'rdStyles' : 'rdElements';
      const rdSelected = state[condRdTxt];
      const itemSelected = rdSelected[itemId];

      return {
        ...state,
        [condRdTxt]: {
          ...rdSelected,
          [itemId]: {...itemSelected, [condType]: value},
        },
      };
    },

    updatePrjSelected() {
      return {
        ...state,
        rdProject: {
          ...rdProject,
          selected: action.value,
        },
      };
    },
  };
};

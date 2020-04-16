export default (state, action) => {
  const { rdElements, rdStyles, rdProject } = state;

  return {
    deleteItem() {
      const { itemId, parentId, condArrType } = action.toAction;
      const parentSelected = rdElements[parentId];
      // ------ Update Parent arrChildren
      const arrChdParent = parentSelected[condArrType];

      const idxInTheParent = arrChdParent.findIndex(item => item === itemId);
      arrChdParent.splice(idxInTheParent, 1);
      return {
        ...state,
        rdElements: {
          ...rdElements,
          [parentId]: { ...parentSelected, [condArrType]: [...arrChdParent] }
        }
      };
    },

    delPropStl() {
      const { styleId, objToDel } = action.toAction;
      const styleSelected = rdStyles[styleId];
      const arrChdProps = styleSelected.arrProps;
      const idxProp = arrChdProps.findIndex(item => item.id === objToDel.id);

      arrChdProps.splice(idxProp, 1);

      return {
        ...state,
        rdStyles: {
          ...rdStyles,
          [styleId]: { ...styleSelected, arrProps: [...arrChdProps] }
        }
      };
    }
  };
};

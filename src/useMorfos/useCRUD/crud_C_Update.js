export default (type, infoObj, infoPar) => {
  const {
    firestore,
    dispatch,
    docPrjId,
    itemObj,
    asyncCall,
    timerDb
  } = infoPar;

  const newEditItem = {
    titlePrj: () => {
      const { value } = infoObj;

      // // ------ Call SYNC
      dispatch({
        type: "updateTitlePrj",
        itemId: docPrjId,
        value
      });

      // ------ Set Db
      const asyncFn = async () => {
        const infoUpdate = {
          name: value
        };

        return firestore
          .collection("projects")
          .doc(docPrjId)
          .update(infoUpdate);
      };

      // ------ call ASYNC Db
      const callAsync = () => asyncCall({ asyncFn, dispatch });

      timerDb(callAsync);
    },

    titleLabel: () => {
      const { elId, styleId, stlObj } = itemObj;
      const { value, type, propField } = infoObj;
      const condSubCol = styleId ? "styles" : "elements";
      const condPropField = propField === "prop" ? "prop" : "value";
      const condStlProp = propField ? "arrProps" : "title";
      const condType = type === "txt" ? "label" : condStlProp;
      const condId = styleId ? styleId : elId;
      const condNum = isNaN(value) ? value : Number(value);

      // ------ Set Prop Value
      const infoStlProp = () => {
        const arrProps = stlObj.arrProps;
        const findIdx = arrProps.findIndex(item => item.id === itemObj.item.id);
        arrProps[findIdx][condPropField] =
          condPropField === "prop" ? value : condNum;

        return [...arrProps];
      };
      const condValue = condStlProp === "title" ? value : infoStlProp();

      // ------ Call SYNC
      dispatch({
        type: "updateTitleLabel",
        value: condValue,
        itemId: condId,
        condType,
        styleId
      });

      // ------ Set Db
      const asyncFn = async () => {
        const infoUpdate = {
          [condType]: condValue
        };

        return firestore
          .collection("projects")
          .doc(docPrjId)
          .collection(condSubCol)
          .doc(condId)
          .update(infoUpdate);
      };

      // ------ call ASYNC Db
      const callAsync = () => asyncCall({ asyncFn, dispatch });

      timerDb(callAsync);
    }
  };

  newEditItem[type]();
};

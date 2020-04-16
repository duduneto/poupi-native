export default (type, infoObj, infoPar) => {
  const {
    firebase,
    firestore,
    dispatch,
    // changeRd,
    docPrjId,
    itemObj,
    asyncCall
  } = infoPar;

  const deleteItem = () => {
    // ------ set Db
    const condArrType = type === "el" ? "arrChildren" : "arrStyles";
    const condArrId = type === "el" ? itemObj.elId : itemObj.styleId;

    // ------ set Firebase tools
    const asyncFn = async () => {
      const infoUpdate = {
        [condArrType]: firebase.firestore.FieldValue.arrayRemove(condArrId)
      };

      return firestore
        .collection("projects")
        .doc(docPrjId)
        .collection("elements")
        .doc(itemObj.parentId)
        .update(infoUpdate);
    };

    const objIds = {
      itemId: condArrId,
      parentId: itemObj.parentId,
      condArrType
    };

    // ------ call ASYNC
    // (delete items in DB!)
    asyncCall({
      asyncFn,
      actionSuccess: "deleteItem",
      toAction: objIds,
      dispatch
    });
  };

  const newRemoveItem = {
    prj: () => {
      const asyncFn = async () =>
        firestore
          .collection("projects")
          .doc(docPrjId)
          .delete();

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: "CLEAR_ALL",
        dispatch
      });
    },
    el: () => deleteItem(),
    stl: () => deleteItem(),
    stlProp() {
      // ------ Set Firebase Tools
      const styleId = itemObj.stlObj.docId;
      const asyncFn = async () => {
        const infoUpdate = {
          arrProps: firebase.firestore.FieldValue.arrayRemove(itemObj.item)
        };

        return firestore
          .collection("projects")
          .doc(docPrjId)
          .collection("styles")
          .doc(styleId)
          .update(infoUpdate);
      };

      // ------ Set ASYNC
      const objIds = {
        styleId,
        objToDel: itemObj.item
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: "delPropStl",
        toAction: objIds,
        dispatch
      });
    }
  };

  newRemoveItem[type]();
};

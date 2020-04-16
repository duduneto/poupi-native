export default (type, infoObj, infoPar) => {
  const {
    firebase,
    firestore,
    dispatch,
    docPrjId,
    itemObj,
    asyncCall
  } = infoPar;

  const batchDb = firestore.batch();

  const newItem = info => {
    // ------ set Firebase tools
    const { subCollection, objReturn, newPrjId, newIdPrj } = info;
    const condPrj = docPrjId || newPrjId;
    let refDb = firestore.collection("projects");
    refDb = newIdPrj ? refDb.doc() : refDb.doc(condPrj);
    if (subCollection) refDb = refDb.collection(subCollection).doc();
    const fbDocId = refDb.id;

    // ------ add new props
    objReturn.createdAt = firebase.firestore.FieldValue.serverTimestamp();
    objReturn.docId = fbDocId;

    // ------ set REDUX

    const action = {
      type: subCollection ? "addDynItem" : "updatePrjData",
      rdName: subCollection === "styles" ? "rdStyles" : "rdElements",
      value: objReturn
    };

    // ------ call REDUX
    dispatch(action);

    // ------ set Db
    batchDb.set(refDb, objReturn);

    return objReturn;
  };

  const newStl = info => {
    // ------ Set Style
    const objReturn = {
      arrProps: info.arrStlProps,
      name: "stlX", // temp
      title: info.stlTitle
    };

    // ------ Add New Style
    const objComplete = newItem({
      objReturn,
      type: "newStl",
      subCollection: "styles",
      newPrjId: info.newPrjId
    });

    return objComplete;
  };

  const newTxt = (txt, info) => {
    // ------ Set Style
    const infoStl = {
      stlTitle: txt,
      arrStlProps: [{ id: "1", prop: "color", value: "grey" }],
      newPrjId: info
    };

    const addStl = newStl(infoStl);

    // ------ Set Text
    const objReturn = {
      arrStyles: [addStl.docId],
      name: "txtX", // temp
      label: txt,
      type: "txt"
    };

    // ------ Add New Text
    const objComplete = newItem({
      objReturn,
      type: "newTxt",
      subCollection: "elements",
      newPrjId: info
    });

    return objComplete;
  };

  const newSc = info => {
    // ------ Set Text
    const addTxt = newTxt("Nova Tela", info.newPrjId);

    // ------ Set Style
    const infoStl = {
      stlTitle: "Tela",
      arrStlProps: [{ id: "1", prop: "flex", value: 1 }],
      newPrjId: info.newPrjId
    };
    const addStl = newStl(infoStl);

    // ------ Set Screen
    const objReturn = {
      arrChildren: [addTxt.docId],
      arrStyles: [addStl.docId],
      name: info.name, // temp
      type: info.type,
      title: info.title
    };

    // ------ Add New Screen
    const objComplete = newItem({
      objReturn,
      type: "newSc",
      subCollection: "elements",
      newPrjId: info.newPrjId
    });

    return objComplete;
  };

  const sendFb = (value, arrName) => {
    const { parentId } = itemObj;
    const condSubCol = arrName === "arrProps" ? "styles" : "elements";

    // ------ Set Db
    const refDb = firestore
      .collection("projects")
      .doc(docPrjId)
      .collection(condSubCol)
      .doc(parentId);

    // ------ Set to Add to Parent
    batchDb.update(refDb, {
      [arrName]: firebase.firestore.FieldValue.arrayUnion(value)
    });

    // Set ASYNC Db
    const infoToAction = { parentId, value, arrName };

    // ------ call ASYNC Db
    asyncCall({
      asyncFn: async () => batchDb.commit(),
      actionSuccess: "addParentItem",
      toAction: infoToAction,
      dispatch
    });
  };

  const newAddItem = {
    prj() {
      // ------ add New Prj
      const addPrj = newItem({
        objReturn: {
          name: "Novo Projeto"
        },
        newIdPrj: true
      });

      // ------ add New Sc
      const objReturnSc = {
        name: "scX", // temp
        type: "sc",
        title: "Tela Sem Nome",
        newPrjId: addPrj.docId
      };
      const addSc = newSc(objReturnSc);

      // ------ add New App
      const objReturn = {
        arrChildren: [addSc.docId],
        type: "app"
      };

      newItem({
        objReturn,
        subCollection: "elements",
        newPrjId: addPrj.docId
      });

      // ------ call ASYNC
      asyncCall({
        asyncFn: async () => batchDb.commit(),
        actionSuccess: "createNewProject",
        toAction: addPrj,
        dispatch
      });
    },

    sc() {
      // ------ Set Text
      const addTxt = newTxt("Nova Tela");

      // ------ Set Style
      const infoStl = {
        stlTitle: "Tela",
        arrStlProps: [{ id: "1", prop: "flex", value: 1 }]
      };
      const addStl = newStl(infoStl);

      // ------ Set Screen
      const objReturn = {
        arrChildren: [addTxt.docId],
        arrStyles: [addStl.docId],
        name: "scX", // temp
        type: "sc",
        title: "Tela Sem Nome"
      };

      // ------ Add New Screen
      const objComplete = newItem({
        objReturn,
        type: "newSc",
        subCollection: "elements"
      });

      // ------ Add All to Firebase
      sendFb(objComplete.docId, "arrChildren");
    },

    box() {
      // ------ Set Text
      const addTxt = newTxt("Novo Box");

      // ------ Set Style
      const infoStl = {
        stlTitle: "fullView",
        arrStlProps: [
          { id: "1", prop: "borderWidth", value: 1 },
          { id: "2", prop: "borderColor", value: "#999" },
          { id: "3", prop: "padding", value: 5 }
        ]
      };
      const addStl = newStl(infoStl);

      // ------ Set Box
      const objReturn = {
        arrChildren: [addTxt.docId],
        arrStyles: [addStl.docId],
        name: "boxX", // temp
        type: "box",
        title: "Box Sem Nome"
      };

      // ------ Add New Box
      const objComplete = newItem({
        objReturn,
        type: "newBox",
        subCollection: "elements"
      });

      // ------ Add All to Firebase
      sendFb(objComplete.docId, "arrChildren");
    },

    btn() {
      // ------ Set Text
      const addTxt = newTxt("BotãoX");

      // ------ Set Style
      const infoStl = {
        stlTitle: "btnPrimary",
        arrStlProps: [
          { id: "1", prop: "width", value: 100 },
          { id: "2", prop: "height", value: 40 },
          { id: "3", prop: "backgroundColor", value: "#ccc" }
        ]
      };
      const addStl = newStl(infoStl);

      // ------ Set Button
      const objReturn = {
        arrChildren: [addTxt.docId],
        arrStyles: [addStl.docId],
        name: "btnX", // temp
        type: "btn",
        title: "Novo Botão"
      };

      // ------ Add New Button
      const objComplete = newItem({
        objReturn,
        type: "newBtn",
        subCollection: "elements"
      });

      // ------ Add All to Firebase
      sendFb(objComplete.docId, "arrChildren");
    },

    txt() {
      // ------ Add New Text
      const addTxt = newTxt("TxtX");

      // ------ Add All to Firebase
      sendFb(addTxt.docId, "arrChildren");
    },

    stl() {
      // ------ Set Style
      const objReturn = {
        arrProps: [{ id: "1", prop: "", value: "" }],
        name: "newStl",
        title: "stlW"
      };

      // ------ Add New Style
      const objComplete = newItem({
        objReturn,
        type: "newStl",
        subCollection: "styles"
      });

      // ------ Add All to Firebase
      sendFb(objComplete.docId, "arrStyles");
    },

    stlProp() {
      // ------ Set Obj Prop
      const { arrProps } = itemObj;
      const lastId = arrProps[arrProps.length - 1].id;
      const idNum = Number(lastId) + 1;
      const objComplete = {
        id: String(idNum),
        prop: "",
        value: ""
      };

      // ------ Add All to Firebase
      sendFb(objComplete, "arrProps");
    }
  };

  newAddItem[type]();
};

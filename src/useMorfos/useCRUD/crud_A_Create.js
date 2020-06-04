export default (type, infoObj, infoPar) => {
  const { firebase, firestore, storage, dispatch, asyncCall } = infoPar;

  const newAddItem = {
    setFields: async () => {
      let {
        compFields,
        collection,
        actionName,
        actionValue,
        infoImg,
      } = infoObj;
      const refDb = firestore.collection(collection).doc();
      const fbDocId = refDb.id;

      // ------ When Image Exist
      const getUrl = async () => {
        await storage.ref(`images/${infoImg.name}`).put(infoImg);

        const url = await storage
          .ref('images')
          .child(infoImg.name)
          .getDownloadURL();

        return url;
      };

      if (infoImg) {
        compFields.imgUrl = await getUrl();
      }

      const objComplete = {
        createdAt: firebase.firestore.Timestamp.now(),
        docId: fbDocId,
        ...compFields,
      };

      // ------ Set Db
      const asyncFn = async () => refDb.set(objComplete);

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          actionSuccess: actionName,
          toAction: actionValue,
          dispatch,
        });
      callAsync();
    },
  };

  newAddItem[type]();
};

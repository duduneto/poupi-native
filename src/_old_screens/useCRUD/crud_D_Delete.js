export default (type, infoObj, infoPar) => {
  const {
    // firebase,
    firestore,
    dispatch,
    asyncCall,
  } = infoPar;

  const newRemoveItem = {
    deleteModality: () => {
      let { collection, editId } = infoObj;

      const refDb = firestore.collection(collection).doc(editId);

      // ------ Set Db
      const asyncFn = async () => refDb.delete();

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          dispatch,
        });
      callAsync();
    },
    deleteUser: () => {
      let { collection, editId } = infoObj;

      console.log('delete user => ', collection, editId);
      const refDb = firestore.collection(collection).doc(editId);

      // ------ Set Db
      const asyncFn = async () => refDb.delete();

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          actionSuccess: 'signOut',
          dispatch,
        });
      callAsync();
    },
  };

  newRemoveItem[type]();
};

export default (type, infoObj, infoPar) => {
  const {
    firebase,
    firestore,
    storage,
    dispatch,
    asyncCall,
    initialState,
  } = infoPar;

  const newEditItem = {
    clearAll: () => {
      dispatch({ type: 'clearAll', initialState });
    },
    signInGoogle: async () => {
      const refDb = firestore.collection('users');

      const provider = new firebase.auth.GoogleAuthProvider();

      // ------ Set Permission
      const getData = async () => {
        const asyncGetPermission = await firebase
          .auth()
          .signInWithPopup(provider);

        return asyncGetPermission.user;
      };

      // ------ Get User Data
      const dataUser = await getData();

      const searchUser = await firestore
        .collection('users')
        .where('userEmail', '==', dataUser.email)
        .get();

      let arrUser = [];
      searchUser.forEach(doc => arrUser.push(doc.data()));
      let newUser = arrUser.length === 0;
      console.log('arrUser', arrUser);

      const compFields = {
        userName: dataUser.displayName,
        image: dataUser.photoURL,
        userEmail: dataUser.email,
        infos: { jumpOnboarding: true },
        typeAccount: 'client',
      };

      // // ------ Set New User
      const refDoc = refDb.doc();

      if (newUser) {
        compFields.createdAt = firebase.firestore.Timestamp.now();
        compFields.docId = refDoc.id;
      }

      const condFbType = newUser
        ? refDoc.set({ ...compFields })
        : refDb.doc(arrUser[0].docId).update({ ...compFields });
      const asyncFn = () => condFbType;

      // // ------ call ASYNC Db
      asyncCall({
        asyncFn,
        actionSuccess: 'signIn',
        toAction: arrUser[0],
        dispatch,
      });
    },
    signOut: () => {
      // ------ Set Db
      const asyncFn = async () => firebase.auth().signOut();

      // ------ call ASYNC Db
      asyncCall({
        asyncFn,
        actionSuccess: 'signOut',
        // toAction: actionValue,
        dispatch,
      });
    },
    updateFields: async () => {
      let {
        compFields,
        collection,
        editId,
        infoImg,
        actionName,
        actionValue,
      } = infoObj;
      const refDb = firestore.collection(collection).doc(editId);

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
        ...compFields,
      };

      // ------ Set Db
      const asyncFn = async () => refDb.update(objComplete);

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
    jumpOnboarding() {
      let { userId } = infoObj;

      const refDb = firestore.collection('users').doc(userId);

      const objComplete = {
        infos: {
          jumpOnboarding: true,
        },
      };

      // ------ Set Db
      const asyncFn = async () => refDb.update(objComplete);

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          dispatch,
        });
      callAsync();
    },
    setPermissions: () => {
      let { sttValues, collection, actionName, actionValue } = infoObj;
      const refDb = firestore
        .collection(collection)
        .doc('yNuUc3K24PYB5aCDX0QG');

      const objComplete = {
        arrEmails: sttValues,
      };

      // ------ Set Db
      const asyncFn = async () => refDb.update(objComplete);

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
    setSubscribedUser: () => {
      // VER PADRAO
      let { docId, userId } = infoObj;

      const refDb = firestore.collection('schedules').doc(docId);

      // ------ Set Db
      const asyncFn = async () => {
        const arrStudents = await refDb.get();
        const newArrStudents = [...arrStudents.data().students, userId];

        refDb.update({ students: newArrStudents });
        return { ...newArrStudents, students: newArrStudents };
      };

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          actionSuccess: 'subscribeUser',
          dispatch,
        });
      callAsync();
    },
    setUnsubscribedUser: () => {
      // VER PADRAO
      let { docId, userId } = infoObj;

      const refDb = firestore.collection('schedules').doc(docId);

      // ------ Set Db
      const asyncFn = async () => {
        const arrStudents = await refDb.get();
        const newArrStudents = arrStudents
          .data()
          .students.filter(_userId => _userId !== userId);

        refDb.update({ students: newArrStudents });
        return { ...newArrStudents, students: newArrStudents };
      };

      // ------ call ASYNC Db
      const callAsync = () =>
        asyncCall({
          asyncFn,
          actionSuccess: 'subscribeUser',
          dispatch,
        });
      callAsync();
    },
  };

  newEditItem[type]();
};

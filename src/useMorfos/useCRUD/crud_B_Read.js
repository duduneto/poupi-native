export default (type, infoObj, infoPar) => {
  const {
    firestore,
    // firebase,
    asyncCall,
    dispatch,
  } = infoPar;

  const newRead = {
    readContent: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore.collection('content').get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };
      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setRdContent',
        // toAction: xxx,
        dispatch,
      });
    },
    usersList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore
          .collection('users')
          .where('typeAccount', '==', 'client')
          .get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setUsersList',
        dispatch,
      });
    },
    modalitiesList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore
          .collection('categories')
          .orderBy('createdAt', 'desc')
          .get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setModList',
        // toAction: xxx,
        dispatch,
      });
    },
    permissionsList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore.collection('permissions').get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setPermList',
        dispatch,
      });
    },
    teachersList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore
          .collection('users')
          .where('arrCateg', 'array-contains', infoObj)
          .get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setTeachersList',
        // toAction: xxx,
        dispatch,
      });
    },
    scheduledClassesList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore
          .collection('schedules')
          .where('teacherId', '==', infoObj)
          .get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setSchedulesClassesList',
        // toAction: xxx,
        dispatch,
      });
    },
    scheduledClassStudentsList: () => {
      const asyncFn = async () => {
        const promises = infoObj.map(async (userId, idx) => {
          const studentData = await firestore
            .collection('users')
            .where('docId', '==', userId)
            .get();
          return studentData;
        });

        const arrFbData = await Promise.all(promises);
        console.log(arrFbData);
        const arrList = [];
        arrFbData.forEach(document => arrList.push(document.docs[0].data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setScheduledClasStudentsList',
        // toAction: xxx,
        dispatch,
      });
    },
    mySubscribedClasses: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore
          .collection('schedules')
          .where('students', 'array-contains', infoObj)
          .get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: 'setUserSubscribedClasses',
        // toAction: xxx,
        dispatch,
      });
    },
  };

  newRead[type]();
};

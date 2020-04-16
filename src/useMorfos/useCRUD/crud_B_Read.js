export default (type, infoObj, infoPar) => {
  const {
    firestore,
    // firebase,
    dispatch,
    itemObj,
    asyncCall
  } = infoPar;

  const newRead = {
    prjData: () => {
      const asyncFn = async () => {
        const dbRef = firestore.collection("projects");

        const objAll = {};

        const getData = async type => {
          const callDb = await dbRef
            .doc(infoObj)
            .collection(type)
            .get();

          const obj = {};
          callDb.forEach(doc => (obj[doc.id] = doc.data()));

          return (objAll[type] = { ...obj });
        };

        const getAll = arr => arr.map(getData);
        await Promise.all(getAll(["elements", "styles"]));

        return objAll;
      };

      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: "readPrjData",
        // toAction: xxx,
        dispatch
      });
    },

    prjList: () => {
      const asyncFn = async () => {
        const arrFbData = await firestore.collection("projects").get();

        const arrList = [];
        arrFbData.forEach(doc => arrList.push(doc.data()));

        return arrList;
      };
      // ------ call ASYNC
      asyncCall({
        asyncFn,
        actionSuccess: "readPrjList",
        // toAction: xxx,
        dispatch
      });
    }
  };

  newRead[type]();
};

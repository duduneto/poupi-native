/* */
/* /

const asyncFn = async () => {
  // ---------- set Async Call
  const dataDb = await firestore.collection('coll').get();

  // ---------- set Data to Show
  const dataSuccess = [];
  dataDb.forEach(doc => dataSuccess.push(doc.data()));

  // ------ return SUCCESS
  return action.asyncDispatch({
    type: ref.successName,
    value: dataSuccess,
  });
};

/* */

// import Packages
import { firestore } from '../fbConfig';

export default info => {
  let db = firestore.collection(info.collection);
  // console.log('* TCL * * *: db', db)

  return db
    .doc(info.docId)
    .get()
    .then(res => res.data());
};

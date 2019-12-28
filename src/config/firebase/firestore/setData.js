// import Packages
import { firestore } from '../fbConfig';

export default info => {
  return firestore
    .collection(info.collection)
    .doc(info.docId)
    .set(info.dataToSet)
    .then(() => info.dataToReducer);
};

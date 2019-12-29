// import Packages
import { firestore } from '../fbConfig';

export default function updateData(info) {
  return firestore
    .collection(info.collection)
    .doc(info.docId)
    .update(info.dataToUpdate)
    .then(() => info.dataToReducer);
}

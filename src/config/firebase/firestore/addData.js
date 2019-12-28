// import Packages
import { firestore } from '../fbConfig';
import { updateData } from './';

/// Firestore adds a new doc with an AUTO GENERATED ID ///
//
export default function addData(info) {
  return firestore
    .collection(info.collection)
    .add(info.dataToAdd)
    .then(res => {
      let infoSaveId = {
        collection: info.collection,
        docId: res.id,
        dataToUpdate: {
          docId: res.id
        },
        dataToReducer: {
          ...info.dataToAdd,
          docId: res.id
        }
      };

      return updateData(infoSaveId);
    });
}

// import Packages
import { firestore } from '../fbConfig';

export default async function getList(info) {
  let db = firestore.collection(info.collection);

  // change just when have some where or orderBy
  db = filterOrder(info, db);

  const callDb = await db.get();
  let arr = [];
  callDb.forEach(doc => arr.push(doc.data()));

  // call only if there's a merge1, 2 or 3
  // getMerge gets docs from a collection according th field of the arr
  info.merge1 && (arr = await getMerge(info.merge1, arr));
  info.merge2 && (arr = await getMerge(info.merge2, arr));

  return arr;
}

//prettier-ignore
const filterOrder = (info, db) => {
  info.where1 && (db = db.where(info.where1.field, info.where1.type, info.where1.value));
  info.where2 && (db = db.where(info.where2.field, info.where2.type, info.where2.value));
  info.order1 && (db = db.orderBy(info.order1.field, info.order1.type));
  info.order2 && (db = db.orderBy(info.order2.field, info.order2.type));

  return db;
};

const getMerge = async (info, arr) => {
  let dbMerge = firestore.collection(info.collection);

  // make a array of async calls
  const promises = arr.map(async item => {
    let itemId = item[info.fromId];

    const callDbMerge = await dbMerge.doc(itemId).get();
    let mergeData = callDbMerge.data();
    let dataName = info.collection + 'Data';

    if (itemId) item[dataName] = mergeData;
  });

  // await a array of async calls
  await Promise.all(promises);
  // slower option: for (let item of arr) {}

  return arr;
};

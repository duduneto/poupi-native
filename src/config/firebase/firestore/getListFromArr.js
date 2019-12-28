// import Packages
import { firestore } from '../fbConfig';

export default async function getListFromArr(info) {
  let db = firestore.collection(info.collection);

  let arr = info.arrShops;

  // get shops from a array already defined
  const shopsPromises = arr.map(async item => {
    let shopId = item.shopId;
    const callDb = await db.doc(shopId).get();
    let shopData = callDb.data();
    item.shopData = shopData;
  });

  // await a array of async calls
  await Promise.all(shopsPromises);

  return arr;
}

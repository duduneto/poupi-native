// import Packages
import React from "react";

// import Internals
// import * as allSc from "./";
import { useHistory, useRd, useChangeRd } from "../../useMorfos";
import mockDb from "./mockDb.json";

export let setDataProdFb = info => {
  // set hooks
  let rdAuthUser = info.rdAuthUser;
  let callFbAddData = info.callFbAddData;
  let history = info.history;

  // SetCall
  let infoAddProd = {
    collection: "products",
    reducerName: "rdAddNewProd",
    dataToAdd: {
      createdAt: new Date(),
      ...info.sttValues,
      userId: rdAuthUser.docId
    }
  };

  let btnSave = () => {
    callFbAddData(infoAddProd);
    history.push("/category-products");
  };

  return <>{btnSave()}</>;
};
export let setDataProdMockDb = info => {
  let arrProducts = Object.values(mockDb.products);

  let btnSave = () => {
    let infoProduct = {
      ...arrProducts,
      xxx: {
        docId: "xxx05",
        userId: info.rdAuthUser.docId,
        name: info.sttValues.Name,
        category: info.sttValues.Category,
        description: info.sttValues.Desc,
        image: "https://source.unsplash.com/200x150/?avocado&1"
      }
    };

    let arrInfoProduct = Object.values(infoProduct);
    info.changeRd("rdProducts", arrInfoProduct);
    info.history.push("/category-products");
  };
  return btnSave();
};

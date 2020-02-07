// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from "react";

// import Internals
import mockDb from "./mockDb.json";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------
export default (info, dbFb) => {
  // set hooks
  let rdAuthUser = info.rdAuthUser;
  let callFbAddData = info.callFbAddData;
  let goTo = () => info.history.push("/category-products");

  let condCateg = !info.sttValues.category
    ? info.optDefault
    : info.sttValues.Category;

  let dataToAdd = {
    createdAt: new Date(),
    ...info.sttValues,
    userId: rdAuthUser.docId,
    category: condCateg,
    image: "https://source.unsplash.com/200x150/?avocado&1"
  };

  let btnSaveMock = () => {
    let arrMock = Object.values(mockDb.products);

    let infoProduct = {
      ...arrMock,
      dataToAdd
    };

    let arrInfoProduct = Object.values(infoProduct);
    info.changeRd("rdProducts", arrInfoProduct);
    goTo();
  };

  let btnSaveFb = () => {
    // SetCall
    let infoAddProd = {
      collection: "products",
      reducerName: "rdAddNewProd",
      dataToAdd
    };

    callFbAddData(infoAddProd);
    goTo();
  };

  return dbFb ? btnSaveFb() : btnSaveMock();
};

// ---------------
// #endregion
// ***************************************

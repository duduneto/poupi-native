// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import internals
import { firebase, firestore } from "../../config/firebase/fbConfig";
import { A_Create, B_Read, C_Update, D_Delete, asyncCall } from ".";
import { useChangeRd } from "..";

// ---------------
// #endregion
// ***************************************

export default itemObj => {
  // console.log("type", type);

  // set Hooks
  const dispatch = useDispatch();
  const changeRd = useChangeRd();
  const docPrjId = useSelector(state => state.rdProject.selected.docId);

  const [sttTimer, setTimer] = React.useState();
  const timerDb = func => {
    clearTimeout(sttTimer);
    setTimer(setTimeout(func, 3000));
  };

  const infoPar = {
    firestore,
    firebase,
    dispatch,
    changeRd,
    docPrjId,
    itemObj,
    asyncCall,
    timerDb
  };

  const infoCalls = {
    callCreate: (type, infoObj) => A_Create(type, infoObj, infoPar),
    callRead: (type, infoObj) => B_Read(type, infoObj, infoPar),
    callUpdate: (type, infoObj) => C_Update(type, infoObj, infoPar),
    callDelete: (type, infoObj) => D_Delete(type, infoObj, infoPar)
  };

  return infoCalls;
};

export { default as A_Create } from "./crud_A_Create";
export { default as B_Read } from "./crud_B_Read";
export { default as C_Update } from "./crud_C_Update";
export { default as D_Delete } from "./crud_D_Delete";
export { default as asyncCall } from "./crudAsyncCall";

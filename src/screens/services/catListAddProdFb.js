// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
// import * as allSc from "./";
import { useHistory, useRd, useChangeRd } from "../../useMorfos";
import mockDb from "./mockDb.json";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default (info, dbFb) => {
  let SetCatAddProdFb = () => {
    // set Hooks
    let { rdContent } = useRd();
    let arrCateg = rdContent.sc02a.arrCateg;

    let listOptions = Object.values(arrCateg).map((item, idx) => {
      let infoReturn = {
        label: item.label,
        value: item.id
      };
      return <info.CompReturn key={idx} info={infoReturn} />;
    });
    return listOptions;
  };
  let SetCatAddProdMockDb = () => {
    let arrCateg = mockDb.content.pt.sc02a.arrCateg;

    let listOptions = Object.values(arrCateg).map((item, idx) => {
      let infoReturn = {
        label: item.label,
        value: item.id
      };
      return <info.CompReturn key={idx} info={infoReturn} />;
    });
    return listOptions;
  };

  return dbFb ? SetCatAddProdFb() : SetCatAddProdMockDb();
};

// ---------------
// #endregion
// ***************************************

// #region :: IMPORTs
// ***************************************
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import defaultImg from "../images/default.jpg";
import { ItemCateg, noItemComp } from "./Sc02a_v";
import { catProdList } from "./services";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
  // let history = useHistory();
  // let changeRd = useChangeRd();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let listCateg = catProdList({
    noItemComp,
    CompReturn: ItemCateg,
    defaultImg
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    listCateg
    // toSignIn
  };

  return <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

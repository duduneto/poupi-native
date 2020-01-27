// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import defaultImg from "../images/default.jpg";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdAuthUser, rdProdSelect } = useRd();
  // let history = useHistory();
  // let changeRd = useChangeRd();

  // let redirect = rdAuthUser && history.push("/sign-in");
  let redirect = false;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>
  let produto = rdProdSelect;
  let source = produto.image;
  let condThumbnail = !source ? defaultImg : source;
  // let toSignIn = () => history.push("/sign-in");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    condThumbnail,
    rdContent,
    produto
    // toSignIn
  };

  return redirect || <AllSc.Sc03b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

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
  let { rdContent, rdAuthUser } = useRd();
  let scContent = rdContent.sc03a;
  let history = useHistory();
  let changeRd = useChangeRd();

  let source = rdAuthUser.image;
  let userName = rdAuthUser.userName;
  let userEmail = rdAuthUser.email;
  let condThumbnail = !source ? defaultImg : source;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let setSignOut = () => {
    // call Hook
    changeRd("rdAuthUser", null);
    history.push("/sign-in");
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  let signOut = () => setSignOut();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    scContent,
    // BTNs
    rdContent,
    signOut,
    // USERDATA
    condThumbnail,
    userName,
    userEmail
  };

  return <AllSc.Sc03a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useStl } from "./useMorfos";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdAuthUser } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

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

  let active = "";
  let activeFilter = active
    ? [
        useStl.flex1,
        useStl.txtCenter,
        {
          borderBottomColor: "#333",
          borderBottomWidth: 2,
          marginHorizontal: 10
        }
      ]
    : [
        useStl.flex1,
        useStl.txtCenter,
        {
          borderBottomColor: "#eee",
          borderBottomWidth: 2,
          marginHorizontal: 10
        }
      ];

  // let model = () =>

  // let toSignIn = () => history.push("/sign-in");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    activeFilter,
    rdContent
    // toSignIn
  };

  return redirect || <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { Redirect } from "react-router";

// import Internals
import { Cp01 } from "../components";
// import * as Sc from "../";
import { useRd } from "../../useMorfos";

// ---------------
// #endregion
// ***************************************

export default function(props) {
  // set Hooks
  let { rdAuthUser } = useRd();

  return rdAuthUser ? (
    <Cp01 path={props.location.pathname}>{props.children}</Cp01>
  ) : (
    <Redirect to="/sign-in" />
  );
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdAuthUser, rdIptsSignUp } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();
  // let { inputChange } = useForm('rdIptsSignUp');

  let redirect = rdAuthUser && history.push("/profile");
  // let scContent = rdContent.sc01a;
  let scContent = rdContent.sc01a;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let signIn = () => {
    // set Call
    let infoUser = {
      userName: "Maria",
      email: "ladymary@email.com",
      age: 32
    };

    // call Hook
    changeRd("rdAuthUser", infoUser);

    // redirect
    history.push("/profile");
  };

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  let enter = () => signIn();
  let toTerms = () => history.push("/terms");
  let toTempUsers = () => history.push("/temp-users");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    // values
    scContent,

    // btns
    enter,
    toTerms,
    toTempUsers
  };

  return redirect || <AllSc.Sc01a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { Text } from "react-native";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, UseFbListItems } from "../useMorfos";
// import { NoItems, ListItem } from "./Sc00b_v";
import dbRef from "../useMorfos/dbRef.json";
import { ListItem } from "./Sc00b_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // set Hook
  const usersList = dbRef.users;

  let callList = Object.values(usersList).map((item, idx) => {
    let goTo = () => {
      changeRd("rdAuthUser", item); // call Hook
      history.push("/profile"); // redirect
    };
    let infoReturn = {
      name: item.userName,
      goTo
    };

    return <ListItem key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let handleTempAuth = item => {
    changeRd("rdAuthUser", item);

    history.push("list-shop");
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  // let toSignIn = () => history.push("/sign-in");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    callList
    // toSignIn
  };

  return <AllSc.Sc00b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

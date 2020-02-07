// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text } from "react-native";

// import Internals
import * as AllSc from "./";
import { useStl, useHistory, useRd, useChangeRd } from "../useMorfos";

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

  let scContent = rdContent.sc00;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}
  const screenOptions = {
    problema: { label: "xxx01", content: "conteudo item 1" },
    aversao: { label: "xxx02", content: "conteudo 2" }
  };

  // let listAcc = Object.keys(screenOptions).map((item, id) => (
  let listAcc = Object.keys(screenOptions).map((item, id) => (
    <View key={id} label={item}>
      {/* {console.log("item", item)} */}
      {Object.values(screenOptions).map((subItem, subId) => (
        <View>
          {console.log("item", subItem.content)}
          <Text key={id + subId}>{subItem.content}</Text>
        </View>
      ))}
    </View>
  ));

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
    scContent,
    listAcc
    // toSignIn
  };

  return <AllSc.Sc05a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

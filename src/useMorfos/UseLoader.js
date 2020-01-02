// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, ActivityIndicator, ShadowPropTypesIOS } from "react-native";
// import Internal Components
import { useStl } from "./";
import { primaryColor } from "../config/styles";

// ---------------
// #endregion
// ***************************************
// let color = useStl.bgPrimary.backgroundColor;
// let color = useStl;
// console.log(useStl)
// ***************************************
// #region :: FUNCTION
// ---------------

export default function UseLoader(props) {
  return <ActivityIndicator size={props.size} color={primaryColor} />;
}

// ---------------
// #endregion
// ***************************************

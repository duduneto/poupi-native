// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ActivityIndicator } from "react-native";
// import Internal Components
// import { useStl } from "./";
import { primaryColor } from "../config/styles";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function UseLoader(props) {
  return (
    <ActivityIndicator
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      size={props.size}
      color={primaryColor}
    />
  );
}

// ---------------
// #endregion
// ***************************************

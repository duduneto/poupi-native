// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import Internals
import { useStl, UseAcordion } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [useStl.flex1];
let stlBODY2 = [useStl.txtTitleCard];
// let stlBODY2b = [useStl.mgB20, useStl.txtBase];
// let stlBODY2c = [useStl.txtPrimaryInverse];
// let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
// export const itemList = (item) => (<View>{item}</View>)

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <>
    {/* PART 1 */}
    {/* ------------------------------ */}

    <UseAcordion>{info.listAcc}</UseAcordion>

    {/* END */}
    {/* ------------------------------ */}
  </>

  // ---------------
  // #endregion
  // ***************************************
);

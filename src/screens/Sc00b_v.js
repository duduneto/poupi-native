// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import Internals
import { Cp01 } from "./components";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [useStl.flexMaster];

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

export const NoItems = () => <Text>Sem Itens</Text>;

// list Item
export const ListItem = info => (
  <>
    <br />
    <TouchableOpacity>
      <Text style={stlBODY2}>{info.item.userName}</Text>
    </TouchableOpacity>
  </>
);

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <Cp01 path="/temp-users">
    {/* BODY */}
    {/* ------------------------------ */}
    <View style={stlBG1}>
      {/* PART 1 */}
      {/* ------------------------------ */}

      <Text style={stlBODY2}>User List in Firestore</Text>

      {info.callList}

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </Cp01>
  // ---------------
  // #endregion
  // ***************************************
);

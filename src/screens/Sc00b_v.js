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

let stlBG1 = [useStl.flexMaster, useStl.pad20];

let stlBODY2 = [useStl.txtTitleCard, { color: "white" }];
let stlBODY2a = [useStl.txtTitleCard, { marginBottom: 20 }];
let stlBODY3 = [
  useStl.btn,
  useStl.btnMedium,
  useStl.btnPrimary,
  { width: "100%", marginBottom: 10 }
];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// export const NoItems = () => <Text>Sem Itens</Text>;

// list Item
export const ListItem = ({ info }) => (
  <>
    <TouchableOpacity style={stlBODY3} onPress={info.goTo}>
      <Text style={stlBODY2}>{info.name}</Text>
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
    <View style={stlBG1}>
      {/* BODY */}
      {/* ------------------------------ */}

      <Text style={stlBODY2a}>User List in dbRef.json</Text>

      {info.callList}

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </Cp01>

  // ---------------
  // #endregion
  // ***************************************
);

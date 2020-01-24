// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// import Internals
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card];
// let stlBODY1b = [useStl.flexRow, useStl.flexBetween, useStl.mgB20];
// let stlBODY1c = [useStl.txtSmall, { marginBottom: 5, color: "#333" }];
let stlBODY2 = [useStl.txtSubTitleCard];
let stlBODY2b = [useStl.txtBase];
// let stlBODY2c = [useStl.txtSmall];
// let stlBODY2d = [{ paddingBottom: 8 }];
// let stlBODY3 = [useStl.input];

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <>
      {/* LIST */}
      {/* ------------------------------ */}

      <View style={stlBODY1a}>
        <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
        <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
      </View>

      <View style={stlBODY1a}>
        <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
        <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
      </View>

      <View style={stlBODY1a}>
        <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
        <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
      </View>

      <View style={stlBODY1a}>
        <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
        <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
      </View>

      {/* END */}
      {/* ------------------------------ */}
    </>
    // ---------------
    // #endregion
    // ***************************************
  );
};

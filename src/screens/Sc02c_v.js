// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import Internals
import { useStl, UseIcoMoon } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.cardMask, useStl.mgB20];
let stlBODY1b = [useStl.flexRow, useStl.flexBetween, { margin: 8 }];
let stlBODY1c = [useStl.flex1];
let stlBODY2 = [useStl.txtSubTitleCard];
let stlBODY2b = [useStl.txtBase];
let stlBODY3 = [useStl.thumbnail];

let stlBODY3a = [useStl.flexRow, useStl.flexBetween];
let stlBODY2c = [useStl.txtSmall, useStl.flex2, useStl.mgL5];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

export const noItemComp = (
  <View style={stlBODY3a}>
    <UseIcoMoon name="xcircle" size={16} color="#999" />
    <Text style={stlBODY2c}>Nenhum item encontrado!</Text>
  </View>
);

export const ItemStore = ({ info }) => (
  <TouchableOpacity style={stlBODY1a} onPress={info.goTo}>
    <View style={stlBODY1b}>
      <Image source={info.condThumbnail} style={stlBODY3} />
      <View style={stlBODY1c}>
        <Text style={stlBODY2}>{info.name}</Text>
        <Text style={stlBODY2b}>{info.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

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

      {info.listStores}

      {/* END */}
      {/* ------------------------------ */}
    </>

    // ---------------
    // #endregion
    // ***************************************
  );
};

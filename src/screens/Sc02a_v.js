// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import Internals
import { useStl } from "../useMorfos";

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
// let stlBODY2c = [useStl.txtSmall];
// let stlBODY2d = [{ paddingBottom: 8 }];
let stlBODY3 = [useStl.thumbnail];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

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

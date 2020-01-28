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

let stlBODY1a = [useStl.cardMask, useStl.flex1, useStl.cardLongBar];
let stlBODY1b = [useStl.pad20, useStl.flexCenter];
let stlBODY1c = [useStl.imgProfile];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY2 = [useStl.txtTitleCard];
let stlBODY2b = [useStl.txtBase, { marginTop: 20 }];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  // {/* BODY */}
  // {/* ------------------------------ */}

  <View style={useStl.pad20}>
    {/* CARD */}
    {/* ------------------------------ */}

    <View style={stlBODY1a}>
      <Image source={info.condThumbnail} style={stlBODY1c} />
      <View style={stlBODY1b}>
        <Text style={stlBODY2}>{info.store.name}</Text>
        <Text style={stlBODY2b}>{info.store.description}</Text>
      </View>

      <View style={stlBODY1d}>
        <TouchableOpacity style={stlBODY3} onPress={info.signOut}>
          <Text style={stlBODY2c}>{info.scContent.bt01}</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* END */}
    {/* ------------------------------ */}
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

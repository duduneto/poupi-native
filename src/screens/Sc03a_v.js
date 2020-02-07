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

let stlBODY1a = [useStl.card, useStl.cardProfile];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.profileImg];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY1e = [useStl.card, useStl.flexCenter, { paddingBottom: 0 }];
let stlBODY1f = [useStl.pad20];
let stlBODY1g = [useStl.thumbnail, useStl.mgB20];
let stlBODY2 = [useStl.txtTitleCard];
let stlBODY2b = [useStl.mgB20, useStl.txtBase];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];
let stlBODY3a = [useStl.btn, useStl.btnLarge, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stlBODY1f}>
    {/* BODY */}
    {/* ------------------------------ */}

    {/* CARD */}
    {/* ------------------------------ */}

    <View style={stlBODY1a}>
      <View style={stlBODY1b}>
        <Image source={info.condThumbnail} style={stlBODY1c} />
        <Text style={stlBODY2}>{info.userName}</Text>
        <Text style={stlBODY2b}>{info.userEmail}</Text>
      </View>

      <View style={stlBODY1d}>
        <TouchableOpacity style={stlBODY3} onPress={info.signOut}>
          <Text style={stlBODY2c}>{info.scContent.logout}</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={stlBODY1e}>
      <Image src={info.defaultImg} style={stlBODY1g} />
      <Text style={stlBODY2b}>
        Lorem ipsum dolor sit amet, consectetur adipiscinaelit, sed do eiusmod
        tempor
      </Text>
      <View style={stlBODY1d}>
        <TouchableOpacity style={stlBODY3a}>
          <Text style={stlBODY2c}>Cadastrar Prestador</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* END */}
    {/* ------------------------------ */}
  </View>

  /**/
  /*/
    /**/
  // ---------------
  // #endregion
  // ***************************************
);

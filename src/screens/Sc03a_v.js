// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

// import Internals
import { Cp01 } from "./components";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------
let src01 = require("../images/portrait.jpg");

let stlBODY1a = [useStl.card, useStl.cardProfile];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.profileImg];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY1e = [useStl.longBar];
let stlBODY1f = [useStl.pad20];
let stlBODY2 = [useStl.txtTitleCard];
let stlBODY2b = [useStl.mgB20, useStl.txtBase];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <Cp01 title="Meu Perfil" goTo="menu" longBar>
    {/* LONG BAR */}
    {/* ------------------------------ */}

    <View style={stlBODY1e} />

    {/* BODY */}
    {/* ------------------------------ */}

    <View style={stlBODY1f}>
      {/* CARD */}
      {/* ------------------------------ */}

      <View style={stlBODY1a}>
        <View style={stlBODY1b}>
          <Image source={src01} style={stlBODY1c} />
          <Text style={stlBODY2}>{info.userName}</Text>
          <Text style={stlBODY2b}>{info.userEmail}</Text>
        </View>

        <View style={stlBODY1d}>
          <TouchableOpacity style={stlBODY3} onPress={info.signOut}>
            <Text style={stlBODY2c}>SAIR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </Cp01>

  /**/
  /*/
    /**/
  // ---------------
  // #endregion
  // ***************************************
);

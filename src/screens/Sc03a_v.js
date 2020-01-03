// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

// import Internals
import { Cp01 } from "./";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------
let src01 = require("../images/portrait.jpg");

let stlBG1 = [useStl.flex1];
let stlBODY1 = [useStl.flex1];
let stlBODY1a = [useStl.card, useStl.cardProfile];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.profileImg];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY1e = [useStl.longBar];
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
  <>
    <Cp01 title="Meu Perfil" type="short" goTo="menu" />

    <View style={stlBG1}>
      <ScrollView style={stlBODY1}>
        {/* NAV LONG */}
        {/* ------------------------------ */}

        <View style={stlBODY1e} />

        {/* BODY */}
        {/* ------------------------------ */}

        <View style={useStl.pad20}>
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
      </ScrollView>
    </View>
  </>
  /**/
  /*/
    /**/
  // ---------------
  // #endregion
  // ***************************************
);

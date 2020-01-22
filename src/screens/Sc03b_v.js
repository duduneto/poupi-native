// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

// import Internals
import { Cp01 } from "./components";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlBODY1a = [useStl.cardMask, useStl.flex1, useStl.cardLongBar];
  let stlBODY1b = [useStl.pad20, useStl.flexCenter];
  let stlBODY1c = [useStl.longBar];
  let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
  let stlBODY2 = [useStl.txtTitleCard];
  let stlBODY2b = [useStl.txtBase, { marginTop: 20 }];
  let stlBODY2c = [useStl.txtPrimaryInverse];
  let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <Cp01 title="Perfil do Produto" longBar>
      {/* LONG BAR */}
      {/* ------------------------------ */}

      <View style={stlBODY1c} />

      {/* BODY */}
      {/* ------------------------------ */}

      <View style={useStl.pad20}>
        {/* CARD */}
        {/* ------------------------------ */}

        <View style={stlBODY1a}>
          <View style={stlBODY1b}>
            <Text style={stlBODY2}>Nome do Usuário</Text>
            <Text style={stlBODY2b}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </Text>
            <Text style={stlBODY2b}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </Text>
            <Text style={stlBODY2b}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </Text>
          </View>

          <View style={stlBODY1d}>
            <TouchableOpacity style={stlBODY3} onPress={info.signOut}>
              <Text style={stlBODY2c}>SAIR</Text>
            </TouchableOpacity>
          </View>

          {/* END */}
          {/* ------------------------------ */}
        </View>
      </View>
    </Cp01>

    // ---------------
    // #endregion
    // ***************************************
  );
};

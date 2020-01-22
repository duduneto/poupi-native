// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

// import Internals
import { Cp01, Cp02 } from "./components";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlBODY1a = [useStl.card, useStl.flex1];
  let stlBODY2 = [useStl.txtSubTitleCard];
  let stlBODY2b = [useStl.txtBase];
  // let stlBODY2b = [useStl.mgB20, useStl.txtBase];
  // let stlBODY2c = [useStl.txtPrimaryInverse];
  // let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <Cp01 title="Produtos" type="short" goTo="menu">
      {/* LIST */}
      {/* ------------------------------ */}

      <View style={stlBODY1a}>
        <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
        <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
      </View>

      {/* List Temp. Apagar Abaixo */}
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
    </Cp01>

    // ---------------
    // #endregion
    // ***************************************
  );
};

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

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

  let stlBG1 = [useStl.flexMaster];

  let stlBODY1 = [useStl.scrollShortBar, useStl.flex1];
  let stlBODY1a = [useStl.card, useStl.flex1];
  let stlBODY1b = [useStl.flexCenter];
  let stlBODY2 = [useStl.input, useStl.mgB20];
  let stlBODY2c = [useStl.txtPrimaryInverse];
  let stlBODY3 = [
    useStl.btn,
    useStl.btnLarge,
    useStl.btnPrimary,
    { marginBottom: 10 }
  ];
  let stlBODY3a = [useStl.btn, useStl.btnLarge];

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stlBG1}>
      {/* NAV */}
      {/* ------------------------------ */}

      <Cp01 title="Formulário" type="short" icon="left" />

      {/* BODY */}
      {/* ------------------------------ */}

      <ScrollView style={stlBODY1}>
        <View style={stlBODY1a}>
          {/* FIELDs */}
          {/* ------------------------------ */}

          <TextInput style={stlBODY2} placeholder="input1" />
          <TextInput style={stlBODY2} placeholder="input2" />
          <TextInput style={stlBODY2} placeholder="input3" />
          <TextInput
            style={stlBODY2}
            placeholder="input1"
            multiline={true}
            numberOfLines={4}
          />

          {/* BUTTONs */}
          {/* ------------------------------ */}
          <View style={stlBODY1b}>
            <TouchableOpacity style={stlBODY3} onPress={info.event}>
              <Text style={stlBODY2c}>SALVAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={stlBODY3a}>
              <Text>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* END */}
        {/* ------------------------------ */}
      </ScrollView>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

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

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlBODY1a = [useStl.card, useStl.cardLongBar];
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

    <View style={useStl.pad20}>
      {/* BODY */}
      {/* ------------------------------ */}

      <View style={stlBODY1a}>
        {/* FIELDs */}
        {/* ------------------------------ */}

        <TextInput
          style={stlBODY2}
          placeholder="Nome"
          onChangeText={info.getTxt.iptName}
        />
        <TextInput
          style={stlBODY2}
          placeholder="Email"
          onChangeText={info.getTxt.iptEmail}
        />
        <TextInput
          style={stlBODY2}
          placeholder="Phone"
          onChangeText={info.getTxt.iptPhone}
        />
        <TextInput
          style={stlBODY2}
          placeholder="Mensagem"
          multiline={true}
          numberOfLines={4}
          onChangeText={info.getTxt.iptDesc}
        />

        {/* BUTTONs */}
        {/* ------------------------------ */}
        <View style={stlBODY1b}>
          <TouchableOpacity style={stlBODY3} onPress={info.btnSave}>
            <Text style={stlBODY2c}>SALVAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stlBODY3a}>
            <Text>CANCELAR</Text>
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
};

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
          placeholder="input1"
          // name="nome"
          onChange={info.getTxt}
          // onChange={info.inputChange}
          // value={info.sttValues}
        />
        <TextInput
          style={stlBODY2}
          placeholder="input2"
          // name="email"
          // onChange={}
          // value={}
        />
        <TextInput
          style={stlBODY2}
          placeholder="input3"
          // name="telefone"
          // onChange={}
          // value={}
        />
        <TextInput
          style={stlBODY2}
          placeholder="input1"
          multiline={true}
          numberOfLines={4}
          // name="mensagem"
          // onChange={}
          // value={}
        />

        {/* BUTTONs */}
        {/* ------------------------------ */}
        <View style={stlBODY1b}>
          <TouchableOpacity style={stlBODY3}>
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

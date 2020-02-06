// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Picker } from "react-native";

// import Internals
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card, useStl.cardLongBar];
let stlBODY1b = [useStl.flexCenter];
let stlBODY2 = [useStl.input, useStl.mgB20];
let stlBODY2a = [useStl.picker, useStl.mgB20];
let stlBODY2b = [
  {
    border: "none",
    marginVertical: 7,
    marginHorizontal: 10,
    fontSize: 14,
    color: "#666"
  }
];
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

// ***************************************
// #region :: EXPORTs
// ---------------

export const PickerItem = ({ info }) => (
  <Picker.Item label={info.label} value={info.value} />
);

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
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
          placeholder={info.scContent.name}
          onChangeText={info.getTxt.iptName}
        />

        <View style={stlBODY2a}>
          <Picker
            style={stlBODY2b}
            onValueChange={info.getTxt.iptCateg}
            selectedValue={info.condOpt}
          >
            {info.listOptions}
          </Picker>
        </View>

        <TextInput
          style={stlBODY2}
          placeholder={info.scContent.amount}
          onChangeText={info.getTxt.iptAmount}
        />
        <TextInput
          style={stlBODY2}
          placeholder={info.scContent.price}
          onChangeText={info.getTxt.iptPrice}
        />
        <TextInput
          style={stlBODY2}
          placeholder={info.scContent.desc}
          multiline={true}
          numberOfLines={4}
          onChangeText={info.getTxt.iptDesc}
        />

        {/* BUTTONs */}
        {/* ------------------------------ */}
        <View style={stlBODY1b}>
          <TouchableOpacity style={stlBODY3} onPress={info.saveDataProd}>
            <Text style={stlBODY2c}>{info.scContent.save}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stlBODY3a}>
            <Text>{info.scContent.cancel}</Text>
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

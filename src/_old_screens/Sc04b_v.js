// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Image,
} from 'react-native';

// import Internals
import { useStl, UseIcoMoon } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card, useStl.cardLongBar];
let stlBODY1b = [useStl.flexCenter];

let stlBODY1d = [
  useStl.mgB20,
  {
    borderWidth: 2,
    borderColor: '#eee',
    minHeight: 100,
    borderRadius: 16,
  },
];
let stlBODY2 = [useStl.input, useStl.mgB20];
let stlBODY2a = [useStl.picker, useStl.mgB20];
let stlBODY2b = [
  {
    borderWidth: 0,
    marginVertical: 7,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  { marginBottom: 10 },
];
let stlBODY3a = [useStl.btn, useStl.btnLarge];
let stlBODY3b = [useStl.btn, useStl.btnXSmall, { width: 100, margin: 10 }];
let stlBODY3c = [
  {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    top: 3,
    zIndex: 2,
  },
];
let stlUpload = {
  bt: stlBODY3b,
  txt: stlBODY3c,
};
let stlBODY4 = [useStl.msgError];
const stlTHUMBNAIL = { width: '100%', height: 130, borderRadius: 10 };
const stlBODY3e = {
  opacity: 0,
  position: 'absolute',
  zIndex: 10,
  width: 100,
  height: 20,
};
const containerImagePicker = [
  useStl.mgB20,
  useStl.flexCenter,
  {
    borderWidth: 2,
    borderColor: '#eee',
    minHeight: 100,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 10,
  },
];
const imagePickerBtn = [
  useStl.btn,
  useStl.btnXSmall,
  {
    width: 100,
    margin: 20,
    marginBottom: 9,
  },
];
const stlTXT01 = [{ fontSize: 12, color: '#666' }];

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

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={useStl.pad20}>
    {/* BODY */}
    {/* ------------------------------ */}

    <View style={stlBODY1a}>
      {/* FIELDs */}
      {/* ------------------------------ */}
      {info.arrIpts.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.imagePicker && (
            <View style={containerImagePicker}>
              <Image source={item.preview} style={stlTHUMBNAIL} />
              <TouchableOpacity style={imagePickerBtn}>
                <Text style={stlBODY3c}>Carregar Imagem</Text>
                <input
                  style={stlBODY3e}
                  type="file"
                  onChange={item.setOnChange}
                />
              </TouchableOpacity>
            </View>
          )}
          {item.picker && (
            <>
              <Text style={stlTXT01}>{item.pHolder}</Text>
              <View style={stlBODY2a}>
                <Picker
                  style={stlBODY2b}
                  onValueChange={item.setOnChange}
                  selectedValue={info.sttValues ? info.sttValues[item.key] : ''}
                >
                  {info.listOptions}
                </Picker>
              </View>
            </>
          )}
          {item.text && (
            <>
              <Text style={stlTXT01}>{item.pHolder}</Text>
              <TextInput
                style={stlBODY2}
                // placeholder={item.pHolder}
                onChangeText={item.setOnChange}
                multiline={item.multi}
                value={info.sttValues ? info.sttValues[item.key] : ''}
                numberOfLines={item.lines}
              />
            </>
          )}
        </React.Fragment>
      ))}

      {/* BUTTONs */}
      {/* ------------------------------ */}
      {/* Require Msg */}
      {info.sttCondMsg && <Text style={stlBODY4}>{info.scContent.reqMsg}</Text>}
      <View style={stlBODY1b}>
        <TouchableOpacity style={stlBODY3} onPress={info.btnSave}>
          <Text style={stlBODY2c}>{info.scContent.save}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBODY3a} onPress={info.btnCancel}>
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

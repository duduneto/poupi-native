// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Picker } from 'react-native';

// import Internals
import { useStl, UseIcoMoon } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

const stlBODY1a = [useStl.card, useStl.cardLongBar];
const stlBODY1b = [useStl.flexCenter];

const stlBODY1d = [
  useStl.mgB20,
  {
    borderWidth: 2,
    borderColor: '#eee',
    minHeight: 100,
    borderRadius: 16,
  },
];
const stlBODY2 = [useStl.input];
const containerTextInput = [useStl.mgB20];
const errorMessage = { color: '#f56042' };
const stlBODY2a = [useStl.picker, useStl.mgB20];
const stlBODY2b = [
  {
    borderWidth: 0,
    marginVertical: 7,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
];
const stlBODY2c = [useStl.txtPrimaryInverse];
const stlBODY3 = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  { marginBottom: 10 },
];
const stlBODY3a = [useStl.btn, useStl.btnLarge];
const stlBODY3b = [useStl.btn, useStl.btnXSmall, { width: 100, margin: 10 }];
const stlBODY3c = [
  {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    top: 3,
    zIndex: 2,
  },
];
const stlUpload = {
  bt: stlBODY3b,
  txt: stlBODY3c,
};
const stlBODY4 = [useStl.msgError];
const inputDisable = { backgroundColor: '#d9d9d9' };
const disableBtn = { backgroundColor: '#b5b5b5' };
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

export const ActionBtns = ({
  ableSaveBtn,
  btnSave,
  btnSaveTitle,
  btnCancel,
  btnCancelTitle,
}) => (
  <>
    <TouchableOpacity
      style={[stlBODY3, ableSaveBtn && disableBtn]}
      onPress={btnSave}
      disabled={ableSaveBtn}
    >
      <Text style={stlBODY2c}>{btnSaveTitle}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={stlBODY3a} onPress={btnCancel}>
      <Text>{btnCancelTitle}</Text>
    </TouchableOpacity>
  </>
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
          {item.picker && (
            <View style={stlBODY2a}>
              <Text>{item.pHolder}</Text>
              <Picker
                style={stlBODY2b}
                onValueChange={item.setOnChange}
                selectedValue={item.condOpt}
              >
                {info.listOptions}
              </Picker>
            </View>
          )}
          {item.text && (
            <View style={containerTextInput}>
              <Text style={stlTXT01}>{item.pHolder}</Text>
              <TextInput
                style={[stlBODY2, item.disabled && inputDisable]}
                // placeholder={item.pHolder}
                onChangeText={item.setOnChange}
                multiline={item.multi}
                numberOfLines={item.lines}
                onBlur={item.onBlur}
                editable={!item.disabled}
                value={info.sttValues[item.key] && info.sttValues[item.key]}
              />
              {item.errorMsg && (
                <Text style={errorMessage}>{item.errorMsg}</Text>
              )}
            </View>
          )}
        </React.Fragment>
      ))}

      {/* BUTTONs */}
      {/* ------------------------------ */}
      {/* Require Msg */}
      {info.sttCondMsg && <Text style={stlBODY4}>{info.scContent.reqMsg}</Text>}
      <View style={stlBODY1b}>{info.actionBtns}</View>
    </View>

    {/* END */}
    {/* ------------------------------ */}
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

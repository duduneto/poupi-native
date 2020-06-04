// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';

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
const stlBODY2 = [useStl.input, useStl.mgB20];
const stlBODY2c = [useStl.txtPrimaryInverse];
const stlBODY3 = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  { marginBottom: 10 },
];
const stlBODY3a = [useStl.btn, useStl.btnLarge];
const stlBODY3b = [
  useStl.btn,
  useStl.btnXSmall,
  {
    width: 100,
    margin: 20,
    marginBottom: 9,
  },
];
const stlBODY3c = [
  {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    top: 3,
    zIndex: 2,
  },
];
const stlBODY3d = [{ margin: 15 }];
const stlBODY3e = {
  opacity: 0,
  position: 'absolute',
  zIndex: 10,
  width: 100,
  height: 20,
};
const stlBODY4 = [useStl.msgError];
const stlOPTIONS = [useStl.flexRow, useStl.flexBetween, useStl.mgB20];
const stlEDITLABEL = [{ fontSize: 18, color: '#666' }];
const stlPOPUP = [
  useStl.dialogueBox,
  { position: 'absolute', top: 44, right: 20, borderRadius: 8, zIndex: 100 },
];
const stlTHUMBNAIL = { width: '100%', height: 130, borderRadius: 10 };
const stlTXT01 = [{ fontSize: 12, color: '#666' }];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
// export const itemList = (item) => (<View>{item}</View>)

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
      {info.rdEditFields && (
        <View style={stlOPTIONS}>
          <Text style={stlEDITLABEL}>{info.editLabel}</Text>

          <TouchableOpacity onPress={info.btnOptions}>
            <UseIcoMoon name="options" size={22} color="#444" />
          </TouchableOpacity>
        </View>
      )}

      {info.sttToggle && (
        <View style={stlPOPUP}>
          <TouchableOpacity style={stlBODY3d} onPress={info.btnExclude}>
            <Text>{info.scContent.exclude}</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* FIELDs */}
      {/* ------------------------------ */}
      {info.arrIpts.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.imagePicker && (
            <View style={stlBODY1d}>
              <Image source={item.preview} style={stlTHUMBNAIL} />
              <TouchableOpacity style={stlBODY3b}>
                <Text style={stlBODY3c}>Carregar Imagem</Text>
                <input
                  style={stlBODY3e}
                  type="file"
                  onChange={item.setOnChange}
                />
              </TouchableOpacity>
            </View>
          )}
          {item.txt && (
            <>
              <Text style={stlTXT01}>{item.pHolder}</Text>
              <TextInput
                style={stlBODY2}
                // placeholder={item.pHolder}
                onChangeText={item.setOnChange}
                multiline={item.multi}
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

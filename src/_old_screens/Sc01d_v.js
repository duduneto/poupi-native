// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.flexRow, useStl.flexCenter];
let stlBODY1d = [{ flex: 6, marginRight: 5 }];
let stlBODY1e = [{ marginVertical: 20 }];

let stlBODY2 = [useStl.input];
let stlBODY2a = [useStl.flexRow, { marginBottom: 8 }];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  { marginBottom: 10 },
];
let stlBODY3a = [useStl.btn, useStl.btnLarge];
let stlBODY3b = [useStl.btn, useStl.btnSmall];
// let stlBODY4 = [useStl.msgError];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

export const ListView = ({ info }) => (
  <React.Fragment>
    <View style={stlBODY2a}>
      <View style={{ flex: 4 }}>
        {!info.sttEdit && <Text>{info.email}</Text>}
        {info.sttEdit && (
          <TextInput
            style={stlBODY2}
            placeholder={info.pHolder}
            defaultValue={info.email}
            onChangeText={info.setOnChange}
          />
        )}
      </View>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={info.btnEdit}
          style={(useStl.flexCenter, { width: 50 })}
        >
          <Text>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={info.btnExclude}
          style={(useStl.flexCenter, { width: 50 })}
        >
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  </React.Fragment>
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
      <View style={stlBODY1c}>
        <View style={stlBODY1d}>
          <TextInput
            style={stlBODY2}
            placeholder={'Escreva o Email'}
            onChangeText={info.setOnChange1}
            value={info.sttAddEmail}
          />
        </View>
        <TouchableOpacity style={stlBODY3b} onPress={info.btnInclude}>
          <Text>{info.scContent.add}</Text>
        </TouchableOpacity>
      </View>

      <View style={stlBODY1e}>{info.listEmails}</View>

      {/* BUTTONs */}
      {/* ------------------------------ */}
      {/* Require Msg */}
      {/* {info.sttCondMsg && <Text style={stlBODY4}>{info.scContent.reqMsg}</Text>} */}
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

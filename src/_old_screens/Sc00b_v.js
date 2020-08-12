// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl, UseIcoMoon, UseLoader } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [useStl.flexMaster, useStl.pad20];

let stlBODY2 = [useStl.txtTitleCard, { color: 'white' }];
let stlBODY2a = [useStl.txtTitleCard, { marginBottom: 20 }];
let stlBODY2c = [useStl.txtSmall, useStl.flex2, useStl.mgL5];

let stlBODY3 = [
  useStl.btn,
  useStl.btnMedium,
  useStl.btnPrimary,
  { width: '100%', marginBottom: 10 },
];
let stlBODY3a = [useStl.flexRow, useStl.flexBetween];
let stlBODY3b = [useStl.flex1, useStl.flexCenter];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

export const LoaderComp = ({ info }) => (
  <View style={stlBODY3b}>
    <UseLoader size="large" />
  </View>
);

export const NoItemComp = ({ info }) => (
  <View style={stlBODY3a}>
    <UseIcoMoon name="xcircle" size={16} color="#999" />
    <Text style={stlBODY2c}>{info.scContent.noItemComp}</Text>
  </View>
);

export const ListItem = ({ info }) => (
  <>
    <TouchableOpacity style={stlBODY3} onPress={info.goTo}>
      <Text style={stlBODY2}>{info.name}</Text>
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

  <View style={stlBG1}>
    {/* BODY */}
    {/* ------------------------------ */}

    <Text style={stlBODY2a}>{info.scContent.title}</Text>

    {info.callList}

    {/* END */}
    {/* ------------------------------ */}
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

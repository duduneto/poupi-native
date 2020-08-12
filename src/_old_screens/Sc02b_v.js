// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import Internals
import { useStl, UseIcoMoon, UseLoader } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [];
let stlBODY1a = [
  useStl.cardMask,
  useStl.mgB20,
  { minWidth: 120, flex: 1, marginHorizontal: 8 },
];
let stlBODY1b = [useStl.flexRow, { margin: 8 }];
let stlBODY1c = [useStl.flex1];

let stlBODY2 = [{ fontSize: 16, textAlign: 'left', color: '#333' }];
let stlBODY2a = [{ fontSize: 12, textAlign: 'left', color: '#333' }];
let stlBODY2c = [useStl.txtSmall, useStl.flex2, useStl.mgL5];

let stlBODY3 = [useStl.thumbnail];
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

export const NoItemComp = ({ txt }) => (
  <View style={stlBODY3a}>
    <UseIcoMoon name="xcircle" size={16} color="#999" />
    <Text style={stlBODY2c}>{txt}</Text>
  </View>
);

export const ItemCateg = ({ info }) => (
  <TouchableOpacity style={stlBODY1a} onPress={info.goTo}>
    <View style={stlBODY1b}>
      <Image source={info.condThumbnail} style={stlBODY3} />
      <View style={stlBODY1c}>
        <Text style={stlBODY2}>{info.labels}</Text>
        {/* <Text style={stlBODY2a}>{info.txt}</Text> */}
      </View>
    </View>
  </TouchableOpacity>
);

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------
  <View style={stlBODY1}>
    {/* LIST */}
    {/* ------------------------------ */}

    {info.listTeachers}

    {/* END */}
    {/* ------------------------------ */}
  </View>
  // ---------------
  // #endregion
  // ***************************************
);

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

let stlBODY1 = [
  useStl.cardMask,
  useStl.mgB20,
  { minWidth: 120, flex: 10, marginHorizontal: 8 },
];
let stlBODY1a = [useStl.flexRow, { height: 60, paddingLeft: 20, flex: 6 }];
let stlBODY1b = [useStl.flexCenter, { flex: 1, height: 60 }];

let stlBODY2 = [{ fontSize: 16, textAlign: 'center', color: '#fff' }];
let stlBODY2c = [useStl.txtSmall, useStl.flex2, useStl.mgL5];

// let stlBODY3 = [useStl.thumbnail];
let stlBODY3a = [useStl.flexRow, useStl.flexBetween];
let stlBODY3b = [useStl.flex1, useStl.flexCenter];
let stlBODY3c = [
  {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
];

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
  <TouchableOpacity style={stlBODY1} onPress={info.goTo}>
    <Image source={info.condThumbnail} style={stlBODY3c} />
    <View style={stlBODY3a}>
      <View style={stlBODY1a}>
        <Text style={stlBODY2}>{info.labels}</Text>
      </View>
      {info.condAccess && (
        <TouchableOpacity style={stlBODY1b} onPress={info.toEdit}>
          <UseIcoMoon name="edit" size={18} color="#fff" />
        </TouchableOpacity>
      )}
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
  <View>
    {/* LIST */}
    {/* ------------------------------ */}

    {info.listMod}

    {/* END */}
    {/* ------------------------------ */}
  </View>
  // ---------------
  // #endregion
  // ***************************************
);

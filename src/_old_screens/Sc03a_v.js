// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import Internals
import Cp01 from './components/Cp01__Nav';
import { useStl, UseIcoMoon } from '../useMorfos';
import defaultImg from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card, useStl.cardProfile];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.profileImg];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY1e = [useStl.card, useStl.flexCenter, { paddingBottom: 0 }];
let stlBODY1f = [useStl.pad20];
// let stlBODY1g = [useStl.thumbnail, useStl.mgB20];
let stlBODY2 = [useStl.txtTitleCard];
let stlBODY2b = [useStl.mgB20, useStl.txtBase, useStl.txtCenter];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY2d = [stlBODY2b, { marginTop: 20 }];
let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];
let stlBODY3a = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

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

  <View style={stlBODY1f}>
    <View style={stlBODY1a}>
      <View style={stlBODY1b}>
        <Image source={info.condThumbnail} style={stlBODY1c} />
        <Text style={stlBODY2}>{info.userName}</Text>
        <Text style={stlBODY2b}>{info.email}</Text>
      </View>

      <View style={stlBODY1d}>
        <TouchableOpacity style={stlBODY3} onPress={info.excludeUser}>
          <Text style={stlBODY2c}>{info.scContent.exclude}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

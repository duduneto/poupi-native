// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from '../useMorfos';
import Cp01 from './components/Cp01__Nav';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [useStl.flex1];

let stlBODY1a = [useStl.card, useStl.cardLongBar];
let stlBODY2 = [useStl.mgB20, useStl.txtBase];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
export const TxtComp = ({ info }) => <Text style={stlBODY2}>{info.txt}</Text>;

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <>
    <View style={useStl.pad20}>
      <View style={stlBG1}>
        <View style={stlBODY1a}>{info.listTxt}</View>
      </View>
    </View>
  </>

  // ---------------
  // #endregion
  // ***************************************
);

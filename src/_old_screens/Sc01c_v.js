// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

// import Internals
import { useStl, UseIcoMoon } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [{ backgroundColor: '' }];
let stlBODY1 = [useStl.pad20, { backgroundColor: '' }];
let stlBODY1a = [
  useStl.card,
  useStl.flex1,
  useStl.flexCenter,
  useStl.cardLongBar,
  { height: 400 },
];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.mgB20, useStl.flexRow];
let stlBODY1d = [{ maxHeight: 160, textAlign: 'center' }];
let stlBODY1e = [useStl.flexCenter];
let stlBODY2 = [useStl.mgB20, useStl.txtTitleCard, { marginTop: 20 }];
let stlBODY2b = [useStl.mgB20, useStl.txtBase];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [
  useStl.btn,
  useStl.btnMedium,
  useStl.btnPrimary,
  { width: 140 },
];
let stlActive = [useStl.dot, useStl.active];
let stlInactive = [useStl.dot, useStl.noactGr];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

export const ItemDot = ({ info }) => (
  <View style={info.condStlActive(info.item, stlActive, stlInactive)} />
);

export const ItemStep = ({ info }) => (
  <>
    <View style={stlBODY1a}>
      {/* STEP 1 */}
      {/* ------------------------------ */}
      <>
        <UseIcoMoon name={info.img} size={150} color="#975901" />
        <Text style={stlBODY2}>{info.title}</Text>
        <ScrollView style={stlBODY1d}>
          <Text style={stlBODY2b}>{info.txt}</Text>
        </ScrollView>
      </>
    </View>
    <View style={stlBODY1b}>
      {/* DOTs */}
      {/* ------------------------------ */}

      <View style={stlBODY1c}>{info.mapDotItems}</View>
    </View>
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
    {/* NAV */}
    {/* ------------------------------ */}

    {/* CARD */}
    {/* ------------------------------ */}

    <View style={stlBODY1}>
      {info.selectedItem()}

      <View style={stlBODY1e}>
        <TouchableOpacity style={stlBODY3} onPress={info.nextStep}>
          <Text style={stlBODY2c}>{info.scContent.next}</Text>
        </TouchableOpacity>
      </View>

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

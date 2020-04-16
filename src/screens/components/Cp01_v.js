// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

// import Internals
import {useStl, UseIcoMoon} from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [useStl.pad20, useStl.flex1];

let stlNAV1 = [useStl.shortBar];
let stlNAV1a = [useStl.navbarView];
let stlNAV1b = [useStl.leftBox];
let stlNAV1c = [useStl.centerBox];
let stlNAV1d = [useStl.rightBox];
let stlNAV2 = [useStl.titlePageLeft];
let stlBODY1e = [useStl.longBar];
// let stlBODY4 = [useStl.btnFab];
// let stlBODY4a = [{fontSize: 26, color: '#fff', height: 3, lineHeight: 0}];
// let stlBODY3 = []

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

export default ({info}) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <>
    <View style={stlNAV1}>
      <View style={stlNAV1a}>
        <TouchableOpacity style={stlNAV1b} onPress={info.condGoTo}>
          <UseIcoMoon name="left" size={22} color={'#fff'} />
        </TouchableOpacity>
        <View style={stlNAV1c}>
          <Text style={stlNAV2}>fdgfdgdg</Text>
        </View>

        <View style={stlNAV1d} />
      </View>
    </View>
    {/* <ScrollView style={stlBODY1}> */}
    <ScrollView
      style={[!info.longBar && stlBODY1, {backgroundColor: '#f0f0f0'}]}>
      {info.longBar && <View style={stlBODY1e} />}
      {info.children}
    </ScrollView>
  </>

  // ---------------
  // #endregion
  // ***************************************
);

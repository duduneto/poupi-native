// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

// ----------- import Internals
import bgNav from '../../../images/bg_nav.png';
import { useStl, UseIcoMoon } from '../../../../useMorfos';

// #region :: STYLEs *********
const stlNavView = [
  {
    width: '100%',
    height: 60,
    overflow: 'hidden',
  },
];
const stlBGSM = [
  {
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    height: 60,
    top: 0,
    righ: 0,
    left: 0,
    bottom: 0,
  },
];
const stlNAV1 = [useStl.bgPrimary, { zIndex: 2 }];
const stlNAV1a = [useStl.navbarView];
const stlNAV1b = [useStl.leftBox];
const stlNAV1c = [useStl.centerBox];
const stlNAV1d = [useStl.rightBox];
const stlNAV2 = [useStl.titlePageLeft];
// #endregion *********

export default () => {
  // ----------- set Return
  return (
    <View style={stlNAV1}>
      <ImageBackground source={bgNav} style={stlNavView} imageStyle={stlBGSM}>
        <View style={[stlNAV1a]}>
          <TouchableOpacity style={stlNAV1b} onPress={'info.condGoTo'}>
            <UseIcoMoon name={'icon'} size={20} color={'#fff'} />
          </TouchableOpacity>
          <View style={stlNAV1c}>
            <Text style={stlNAV2}>{'title'}</Text>
          </View>

          <View style={stlNAV1d} />
        </View>
      </ImageBackground>
    </View>
  );
};

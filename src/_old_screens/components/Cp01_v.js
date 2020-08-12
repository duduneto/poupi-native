// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

// import Internals
import { Cp02 } from './';
import bgNav from '../../images/bg_nav.png';
import bgNav2 from '../../images/bg_nav2.png';
import { useStl, UseIcoMoon } from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [useStl.pad20, useStl.flex1];
let stlBGNAV = [
  {
    width: '100%',
    height: 60,
    overflow: 'hidden',
  },
];
let stlBGNAV2 = [
  {
    width: '100%',
    height: 120,
    overflow: 'hidden',
  },
];
let stlBGSM = [
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
let stlBGLG = [
  {
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    height: 180,
    top: 0,
    righ: 0,
    left: 0,
    bottom: 0,
  },
];
let stlNAV1 = [useStl.bgPrimary, { zIndex: 2 }];
let stlNAV1a = [useStl.navbarView];
let stlNAV1b = [useStl.leftBox];
let stlNAV1c = [useStl.centerBox];
let stlNAV1d = [useStl.rightBox];
let stlNAV2 = [useStl.titlePageLeft];
let stlBODY1e = [useStl.longBar, useStl.bgPrimary, { position: 'relative' }];
let stlBODY4 = [useStl.btnFab, { backgroundColor: '#333' }];
let stlBODY4b = [
  {
    position: 'absolute',
    elevation: 15,
    zIndex: 100,
    width: '100%',
    height: '100%',
  },
];

let stlSCROLLVIEW = [stlBODY1, { backgroundColor: '#f0f0f0' }];
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

export default ({ info }) => {
  const condShadow = info.longBar ? null : useStl.shadowBar;

  // ***************************************
  // #region :: RENDER
  // ---------------
  return (
    <>
      <View style={stlNAV1}>
        <ImageBackground
          source={bgNav}
          style={[stlBGNAV, condShadow]}
          imageStyle={stlBGSM}
        >
          <View style={[stlNAV1a]}>
            <TouchableOpacity style={stlNAV1b} onPress={info.condGoTo}>
              <UseIcoMoon name={info.icon} size={20} color={'#fff'} />
            </TouchableOpacity>
            <View style={stlNAV1c}>
              <Text style={stlNAV2}>{info.title}</Text>
            </View>

            <View style={stlNAV1d} />
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={!info.longBar && stlSCROLLVIEW}>
        {info.longBar && (
          <View style={stlBODY1e}>
            <ImageBackground
              source={bgNav2}
              style={[stlBGNAV2]}
              imageStyle={stlBGLG}
            />
          </View>
        )}
        {info.children}
      </ScrollView>

      {info.condFab && info.condFab ? (
        <TouchableOpacity style={stlBODY4} onPress={info.goTo}>
          <UseIcoMoon name={'plus'} size={22} color={'#fff'} />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      {info.condMenu && (
        <View style={stlBODY4b}>
          <Cp02 path={info.path} toggleMenu={info.toggleMenu} />
        </View>
      )}
    </>
  );
  // ---------------
  // #endregion
  // ***************************************
};

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

// import Internals
import { Cp02 } from './';
import { useStl, UseIcoMoon } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlNAV1 = [info.condStl];
  let stlNAV1a = [useStl.navbarView];
  let stlNAV1b = [useStl.leftBox];
  let stlNAV1c = [useStl.centerBox];
  let stlNAV1d = [useStl.rightBox];
  let stlNAV2 = [useStl.titlePageLeft];
  // let stlBODY3 = []

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------
    <>
      {info.condMenu && <Cp02 toggleMenu={info.toggleMenu} />}
      <View style={stlNAV1}>
        {/* LEFT */}
        {/* ------------------------------ */}

        <View style={stlNAV1a}>
          {/* <Modal></Modal> */}
          <TouchableOpacity style={stlNAV1b} onPress={info.goTo}>
            <UseIcoMoon name={info.icon} size={22} color={'#fff'} />
          </TouchableOpacity>

          {/* CENTER */}
          {/* ------------------------------ */}

          <View style={stlNAV1c}>
            <Text style={stlNAV2}>{info.title}</Text>
          </View>

          {/* RIGHT */}
          {/* ------------------------------ */}

          <View style={stlNAV1d} />

          {/* END */}
          {/* ------------------------------ */}
        </View>
      </View>
    </>
    // ---------------
    // #endregion
    // ***************************************
  );
};

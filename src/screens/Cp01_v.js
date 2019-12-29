// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from '../useMorfos';

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

    <View style={stlNAV1}>
      {/* LEFT */}
      {/* ------------------------------ */}

      <View style={stlNAV1a}>
        <TouchableOpacity style={stlNAV1b} onPress={info.toSignIn}>
          <Text style={{ color: 'white' }}>{'<'}</Text>
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

    // ---------------
    // #endregion
    // ***************************************
  );
};

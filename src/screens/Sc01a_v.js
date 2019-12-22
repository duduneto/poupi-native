// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from './useMorfos';

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stl01 = [useStl.flexCenter, useStl.flex1];
  let stl02 = [useStl.btn, useStl.btnMedium, { backgroundColor: 'lightgray' }];
  let stl03 = [];
  let stl04 = [{ color: '#999' }];
  // let stl05 = []

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stl01}>
      {/* BTNs */}
      {/* ------------------------------ */}

      <TouchableOpacity style={stl02} onPress={info.enter}>
        <Text style={stl03}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={info.toTerms}>
        <Text style={stl04}>Terms</Text>
      </TouchableOpacity>

      {/* END */}
      {/* ------------------------------ */}
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

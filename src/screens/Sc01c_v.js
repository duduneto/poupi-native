// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from './useMorfos';

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stl01 = [];
  let stl02 = [];
  let stl03 = [];
  // let stl04 = []
  // let stl05 = []

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stl01}>
      <ScrollView style={stl02}>
        {/* PART 1 */}
        {/* ------------------------------ */}

        <Text style={stl03}>Part 1</Text>

        {/* PART 2 */}
        {/* ------------------------------ */}

        <Text>Part 2</Text>

        {/* PART 3 */}
        {/* ------------------------------ */}

        <Text>Part 3</Text>

        <TouchableOpacity onPress={info.event}>
          <Text>CLICK HERE!</Text>
        </TouchableOpacity>

        {/* END */}
        {/* ------------------------------ */}
      </ScrollView>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

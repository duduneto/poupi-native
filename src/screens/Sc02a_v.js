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
        {/* TITLE */}
        {/* ------------------------------ */}

        <Text style={stl03}>PERFIL</Text>

        {/* DATA USER */}
        {/* ------------------------------ */}

        <Text>Nome: {info.userName}</Text>
        <Text>Email: {info.userEmail}</Text>

        {/* PART 3 */}
        {/* ------------------------------ */}

        <Text>----</Text>

        <TouchableOpacity onPress={info.signOut}>
          <Text>SAIR</Text>
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

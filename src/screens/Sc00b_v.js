// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { Cp01 } from './';
import { useStl } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [useStl.flexMaster];

let stlBODY1 = [useStl.scrollShortBar, useStl.flex1];
let stlBODY1a = [useStl.card, useStl.flex1];
let stlBODY2 = [useStl.txtTitleCard];
// let stlBODY2b = [useStl.mgB20, useStl.txtBase];
// let stlBODY2c = [useStl.txtPrimaryInverse];
// let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

// ---------------
// #endregion
// ***************************************

export const NoItems = () => <Text>Sem Itens</Text>;

export const ListItem = info => (
  <>
    <br />
    <TouchableOpacity>
      <Text style={stlBODY2}>{info.item.userName}</Text>
    </TouchableOpacity>
  </>
);

export default ({ info }) => {
  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stlBG1}>
      {/* NAV */}
      {/* ------------------------------ */}

      <Cp01 title="Temp Users" type="short" />

      {/* BODY */}
      {/* ------------------------------ */}

      <ScrollView style={stlBODY1}>
        {/* PART 1 */}
        {/* ------------------------------ */}

        <Text style={stlBODY2}>User List in Firestore</Text>

        {info.callList}

        {/* END */}
        {/* ------------------------------ */}
      </ScrollView>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

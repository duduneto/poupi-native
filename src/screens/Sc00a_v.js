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

export default ({ info }) => {
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

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stlBG1}>
      {/* NAV */}
      {/* ------------------------------ */}

      <Cp01 title="Pagina01" type="short" />

      {/* BODY */}
      {/* ------------------------------ */}

      <ScrollView style={stlBODY1}>
        {/* PART 1 */}
        {/* ------------------------------ */}

        <Text style={stlBODY2}>Part 1</Text>

        {/* PART 2 */}
        {/* ------------------------------ */}

        <Text style={stlBODY2}>Part 2</Text>

        {/* PART 3 */}
        {/* ------------------------------ */}

        <Text style={stlBODY2}>Part 3</Text>

        <TouchableOpacity onPress={info.event}>
          <Text style={stlBODY2}>CLICK HERE!</Text>
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

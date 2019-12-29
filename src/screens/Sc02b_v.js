// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { Cp01, Cp02 } from './';
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
  let stlBODY2 = [useStl.txtSubTitleCard];
  let stlBODY2b = [useStl.txtBase];
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

      <Cp01 title="My Deliveries" type="short" />
      {/* <Cp02 /> */}

      {/* BODY */}
      {/* ------------------------------ */}

      <ScrollView style={stlBODY1}>
        {/* LIST */}
        {/* ------------------------------ */}

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        {/* List Temp. Apagar Abaixo */}
        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        <View style={stlBODY1a}>
          <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
          <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
        </View>

        {/* END */}
        {/* ------------------------------ */}
      </ScrollView>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

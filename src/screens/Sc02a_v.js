// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

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
  let stlBODY1a = [useStl.card];
  let stlBODY1b = [useStl.flexRow, useStl.flexBetween, useStl.mgB20];
  let stlBODY1c = [useStl.txtSmall, { marginBottom: 5, color: '#333' }];
  let stlBODY2 = [useStl.txtSubTitleCard];
  let stlBODY2b = [useStl.txtBase];
  let stlBODY2c = [useStl.txtSmall];
  let stlBODY2d = [{ paddingBottom: 8 }];
  let stlBODY3 = [useStl.input];
  let stlBODY3a = info.activeFilter;

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

      <Cp01 title="All Deliveries" type="short" goTo="menu" />

      {/* BODY */}
      {/* ------------------------------ */}

      <ScrollView style={stlBODY1}>
        {/* FILTER */}
        {/* ------------------------------ */}
        <Text style={stlBODY1c}>Filtrar por:</Text>
        <View style={stlBODY1a}>
          <View style={stlBODY1b}>
            <TouchableOpacity style={stlBODY3a}>
              <Text style={stlBODY2d}>Retirada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stlBODY3a}>
              <Text style={stlBODY2d}>Entrega</Text>
            </TouchableOpacity>
          </View>
          <Text style={stlBODY2c}>Próximo de:</Text>
          <TextInput style={stlBODY3} placeholder={'Escreva o Endereço'} />
        </View>

        {/* LIST */}
        {/* ------------------------------ */}

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

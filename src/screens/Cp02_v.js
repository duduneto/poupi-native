// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

// import Internals
import { useStl } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlBG1 = [
    useStl.flexMaster,
    {
      backgroundColor: 'rgba(00,00,00,.3)',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 10,
      width: '100%',
      height: '100%'
    }
  ];

  let stlBODY1 = [
    { width: 280, height: '100%', backgroundColor: '#000', padding: 20 }
  ];
  // let stlBODY1a = [useStl.card, useStl.flex1];
  let stlBODY2 = [useStl.txtTitleCard, { color: '#fff' }];
  let stlBODY2b = [useStl.mgB20, useStl.txtBase, { color: '#fff' }];
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
      {/* BODY */}
      {/* ------------------------------ */}

      <View style={stlBODY1}>
        {/* ITEMs MENU */}
        {/* ------------------------------ */}

        <TouchableOpacity>
          <Text style={stlBODY2}>{'< Voltar'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBODY2b}>
          <Text style={stlBODY2}>{'Item 1'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBODY2b}>
          <Text style={stlBODY2}>{'Item 2'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBODY2b}>
          <Text style={stlBODY2}>{'Item 3'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBODY2b}>
          <Text style={stlBODY2}>{'Item 4'}</Text>
        </TouchableOpacity>

        {/* END */}
        {/* ------------------------------ */}
      </View>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

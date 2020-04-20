// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import Internals
import {useStl, UseIcoMoon} from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG0 = [
  {
    // position: 'absolute',
    zIndex: 5,
    width: '100%',
    height: '100%',
  },
];

let stlBG1 = [
  {
    backgroundColor: 'rgba(00,00,00,.3)',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
];

let stlBODY1 = [useStl.bgSecondary, {width: 280, height: '100%', padding: 20}];
let stlBODY1a = [{flexDirection: 'row', marginBottom: 25}];
let stlBODY2 = [useStl.txtTitleCard, {color: '#fff', marginLeft: 10}];
let stlBODY2b = [
  useStl.txtBase,
  {margin: 15, color: '#fff', flexDirection: 'row'},
];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
export const ItemMenu = ({info}) => (
  <TouchableOpacity onPress={info.goTo} style={stlBODY2b}>
    <UseIcoMoon name={info.icon} size={22} color={info.condColor} />
    <Text style={[stlBODY2, {color: info.condColor}]}>{info.label}</Text>
  </TouchableOpacity>
);

// ---------------
// #endregion
// ***************************************

export default ({info}) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stlBG0}>
    <TouchableOpacity style={stlBG1} onPress={info.toggleMenu} />

    {/* BODY */}
    {/* ------------------------------ */}

    <View style={stlBODY1}>
      {/* ITEMs MENU */}
      {/* ------------------------------ */}

      <TouchableOpacity style={stlBODY1a} onPress={info.toggleMenu}>
        <UseIcoMoon name="left" size={22} color={'#fff'} />
        <Text style={stlBODY2}>Voltar</Text>
      </TouchableOpacity>

      {info.ItemsList}

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

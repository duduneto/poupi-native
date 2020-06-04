// import packages
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

// import internals
import { useStl, UseIcoMoon, useRouter } from '../useMorfos';

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [useStl.pad20, useStl.flex1];
let stlBODY1e = [useStl.flexCenter];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [useStl.btn, useStl.btnLarge, useStl.btnPrimary];
let stlTXT = [{ fontSize: 22, color: '#b4790e', marginTop: 20 }];

let stlNAV1 = [useStl.shortBar];
let stlNAV1a = [useStl.navbarView];
let stlNAV1b = [useStl.leftBox];
let stlNAV1c = [useStl.centerBox];
let stlNAV1d = [useStl.rightBox];
let stlNAV1e = [useStl.longBar];
let stlNAV2 = [useStl.titlePageLeft];
let stlCARD = [
  useStl.card,
  useStl.flex1,
  useStl.flexCenter,
  useStl.cardLongBar,
  { height: 400 },
];

// ---------------
// #endregion
// ***************************************

export default () => {
  // ------ Hooks + Vars
  let callRouter = useRouter();
  const scContent = useSelector(state => state.rdContent[1].sc404);
  let goTo = () => callRouter('signin');

  return (
    <View style={{ flex: 1 }}>
      <View style={stlNAV1}>
        <View style={stlNAV1a}>
          <TouchableOpacity style={stlNAV1b} onPress={goTo}>
            <UseIcoMoon name={'left'} size={22} color={'#fff'} />
          </TouchableOpacity>
          <View style={stlNAV1c}>
            <Text style={stlNAV2}>{scContent.title}</Text>
          </View>

          <View style={stlNAV1d} />
        </View>
      </View>
      <View style={stlNAV1e} />

      <View style={stlBODY1}>
        <View style={stlCARD}>
          <UseIcoMoon name={'error'} size={120} color={'#b4790e'} />
          <Text style={stlTXT}>{scContent.errorMsg}</Text>
        </View>
        <View style={stlBODY1e}>
          <TouchableOpacity style={stlBODY3} onPress={goTo}>
            <Text style={stlBODY2c}>{scContent.btn}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

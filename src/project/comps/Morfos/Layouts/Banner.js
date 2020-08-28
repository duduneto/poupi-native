// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';
import source from '../../../images/bg_nav2.png';

// #region :: STYLEs *********

const stlBodyView = [
  useStl.flexRow,
  useStl.flexBetween,
  useStl.bgPrimary,
  useStl.pad(0, 40),
  { width: '100%', height: 150 },
];
const stlImg = [{ width: '100%', height: 150, position: 'absolute' }];

const stlTitle1 = [useStl.txtInverseColor, { fontSize: 18 }];
const stlTitle2 = [useStl.txtInverseColor, { fontSize: 14 }];
const stlBt = [useStl.btn, useStl.btnSecondary, useStl.btnMedium];

// #endregion *********

export default info => {
  return (
    <View src={source} style={stlBodyView}>
      <Image source={source} style={stlImg} />
      <View>
        <Text style={stlTitle1}>{info.content.bnTitle}</Text>
        <Text style={stlTitle2}>{info.content.bnSubTitle}</Text>
      </View>
      <TouchableOpacity style={stlBt}>
        <Text style={stlTitle2}>{info.content.bnAct}</Text>
      </TouchableOpacity>
    </View>
  );
};

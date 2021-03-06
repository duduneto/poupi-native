// ----------- import Packs
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

// ----------- import Internals
import { useStl } from '../../../useMorfos';
import { Counter1, Btn1 } from '../../comps';

// #region :: STYLEs *********
const stlBodyView = [
  useStl.flex1,
  useStl.pad20,
  useStl.bgSc,
  useStl.flexTopCenter,
];
const stlTitleTxt = [useStl.txtTitleScreen];
const stlSubTitleTxt = [useStl.txtSubTitleCard];
const stlDescView = [{ width: 200 }];
const stlDescTxt = [useStl.txtBase, useStl.txtCenter];

// #endregion *********

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}
      <Text style={stlTitleTxt}>{info.content.title}</Text>

      <Text style={stlSubTitleTxt}>{info.content.subTitle}</Text>

      <View style={stlDescView}>
        <Text style={stlDescTxt}>{info.content.description}</Text>
      </View>

      {/* ----------- Elements */}
      <Counter1 />
      <Btn1 onPress={info.btnGoto}>{info.content.txtBtn}</Btn1>
    </View>
  );
};

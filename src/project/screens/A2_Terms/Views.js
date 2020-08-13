// #region :: IMPORTs *********
// ----------- import Packs
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../useMorfos';
// #endregion *********

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
// const stlScroll = [useStl.flex1];
// const stlListView = [useStl.flex1];
// const stlItemView = [useStl.flex1];
// const stlItemImg = [useStl.flex1];
// const stlItemTxt = [useStl.flex1];

const stlBtnView = [useStl.flexCenter];
const stlBtn = [useStl.btn, useStl.bgPrimary, useStl.btnMedium];
const stlBtnTxt = [useStl.txtPrimaryInverse];

// --- set Counter
const stlCounterView = [useStl.flexCenter, useStl.flexRow, { margin: 20 }];
const stlCounterBase = [
  useStl.flexCenter,
  { width: 40, heigth: 20, borderRadius: 4 },
];
const stlBtnDecView = [...stlCounterBase, useStl.bgTertiary];
const stlBtnIncView = [...stlCounterBase, useStl.bgPrimary];
const stlCountSymbolText = [
  { fontSize: 16, color: 'white', alignText: 'center' },
];
// #endregion *********

// #region :: EXPORTs *********
// export const itemView = (item) => (<View>{item}</View>)
// #endregion *********

export default ({ info }) => (
  <View style={stlBodyView}>
    {/* ----------- PARTs */}
    <Text style={stlTitleTxt}>{info.title}</Text>

    <Text style={stlSubTitleTxt}>{info.subTitle}</Text>

    <View style={stlDescView}>
      <Text style={stlDescTxt}>{info.description}</Text>
    </View>

    {/* ----------- Counter */}
    <View style={stlCounterView}>
      <Text style={stlTitleTxt}>{`TOTAL: ${info.sttCount}`}</Text>
      <View style={useStl.flexRow}>
        <TouchableOpacity style={stlBtnDecView} onPress={info.btnDecrement}>
          <Text style={stlCountSymbolText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stlBtnIncView} onPress={info.btnIncrement}>
          <Text style={stlCountSymbolText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>

    {/* ----------- Button */}
    <View style={stlBtnView}>
      <TouchableOpacity style={stlBtn} onPress={info.btnGoto}>
        <Text style={stlBtnTxt}>{info.txtBtn}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

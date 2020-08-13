// ----------- import Packs
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

// ----------- import Internals
import { useStl } from '../../../useMorfos';
import { Counter1, Btn1 } from '../../comps';

// #region :: STYLEs *********
const stlBodyView = [
  // useStl.flex1,
  // useStl.pad20,
  // useStl.bgSc,
  // useStl.flexTopCenter,
  { backgroundColor: 'red' },
];
const stlBanner = [useStl.flexCenter, { height: 500 }];
const stlTitleTxt = [useStl.txtTitleScreen];
const stlSubTitleTxt = [useStl.txtSubTitleCard];
const stlDescView = [{ width: 200 }];
const stlDescTxt = [useStl.txtBase, useStl.txtCenter];

// #endregion *********

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}
      <ImageBackground source={info.background} style={stlBanner} />
      {/* 
        <Image source={info.curves} style={stlImgCurves} />
        <Image source={info.detail} style={stlImgDetail} />
        <Image source={info.sport} style={stlImgSport} />

        <View style={stl03}>
          <Image source={info.logo} style={stl01d} />

          <span>{info.scContent.slogan}</span>
          <span>
            Suas aulas a <span>qualquer hora</span> e em
            <span>qualquer lugar</span>
          </span>

          <Text style={stl04b}>{info.scContent.enterUsing}</Text>
          <TouchableOpacity style={stl02} onPress={info.enter}>
            <Text style={stl02a}>ENTRE AGORA</Text>
            <Image source={btnBg} style={stlBgBt} />
          </TouchableOpacity>
        </View>
      </ImageBackground> */}

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

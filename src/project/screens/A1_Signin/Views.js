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
import { useStl, utils } from '../../../useMorfos';
const { setPath } = utils;

// #region :: STYLEs *********
const stlBodyView = [];
const stlBanner = [useStl.flexCenter, { height: 500 }];
const stlTitleTxt = [useStl.txtTitleScreen, { color: '#fff' }];

// --------- DEVICES ADJUSTMENTs
const stlSlogan = [{ color: '#fff' }];
const condDesk = useStl.isDesktop;
const stlWebFrame = [
  useStl.colBreak,
  condDesk
    ? {
        width: '80%',
        marginBottom: 80,
      }
    : {
        width: '50%',
        marginBottom: 40,
      },
];

// --------- BANNER CONTAINER
const stlImgDetail = [
  condDesk
    ? { width: 160, height: 195, position: 'absolute', left: -20, bottom: -40 }
    : { display: 'none' },
];
const stlImgSport = [
  condDesk
    ? { width: 448, height: 400, position: 'absolute', right: 200, bottom: -40 }
    : {
        width: 288,
        height: 240,
        position: 'absolute',
        right: 20,
        bottom: -100,
      },
];
const stlImgCurves = [
  {
    width: 700,
    height: 550,
    position: 'absolute',
    right: 0,
    top: -10,
  },
];
const stlImgLogo = [{ width: 120, height: 60, marginLeft: 0 }];
const stlContentBann = [{ width: '80%', marginBottom: 50 }];

// --------- FEATURES
const stlFeatContainer = [
  useStl.flexCenter,
  { marginTop: 160, marginBottom: 80 },
];
const stlTermsBox = [{ marginBottom: 30 }];
const stlImg = [{ width: 60, height: 60 }];
const stlColumn = [useStl.flex1, useStl.padBreak];

// --------- BUTTONS
const stlBtCallAct1 = [
  {
    width: 110,
    paddingVertical: 12,
    backgroundColor: '#133364',
    alignItems: 'center',
    overflow: 'hidden',
  },
];
const stlBtCallAct2 = [
  {
    paddingVertical: 12,
    backgroundColor: '#133364',
    alignItems: 'center',
    overflow: 'hidden',
    width: 270,
    backgroundColor: '#FF3743',
  },
];
const stlBtTerms = [{ color: '#193E76', marginTop: 20 }];
const stlBtImg = [
  {
    width: 200,
    height: 80,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
  },
];

// --------- TEXTs
const stlBtTxtWhite = [useStl.txtPrimaryInverse, { zIndex: 10 }];
const stlTxtEnter = [
  useStl.txtBase,
  {
    color: '#fff',
    marginBottom: 4,
    marginTop: 20,
    textAlign: 'left',
    fontSize: 12,
  },
];
const stlTxtTeam = {
  color: '#666',
  textAlign: 'center',
  fontSize: 10,
  marginTop: 5,
};
const stlTxtBase = [
  {
    color: '#555',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    width: '100%',
  },
];
const stlTxtBolder = [{ textAlign: 'left', width: '100%', fontWeight: 'bold' }];
const stlTxtDisplay1 = [
  stlTxtBolder,
  { fontSize: 14, color: '#FE144C', lineHeight: 14 },
];
const stlTxtDisplay2 = [
  stlTxtBolder,
  { fontSize: 26, color: '#193E76', lineHeight: 30 },
];
const stlTxtDisplay3 = [
  stlTxtBolder,
  { fontSize: 24, color: '#FE144C', lineHeight: 30 },
];

// #endregion *********

export default ({ info }) => {
  // ----------- set Selectors
  const condDesk = useSelector(stt => setPath(stt, 'rdCondDesk'));

  // ----------- set Return
  return (
    <View style={stlBodyView}>
      {/* ----------- Banner */}
      <ImageBackground source={info.background} style={stlBanner}>
        {!condDesk && (
          <>
            <Image source={info.curves} style={stlImgCurves} />
            <Image source={info.detail} style={stlImgDetail} />
          </>
        )}
        <Image source={info.sport} style={stlImgSport} />

        <View style={stlContentBann}>
          <Image source={info.logo} style={stlImgLogo} />
          <Text style={stlTitleTxt}>{info.content.title}</Text>
          <Text style={stlSlogan}>{info.content.slogan}</Text>
          <Text style={stlTxtEnter}>{info.content.enterUsing}</Text>
          <TouchableOpacity style={stlBtCallAct1} onPress={info.enter}>
            <Text style={stlBtTxtWhite}>{info.content.txtBtn1}</Text>
            <Image source={info.btnBg} style={stlBtImg} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* ----------- App Features */}
      <View style={stlFeatContainer}>
        <View style={stlWebFrame}>
          <View style={stlColumn}>
            <Text style={stlTxtDisplay1}>{info.content.txtDisplay1}</Text>
            <Text style={stlTxtDisplay2}>{info.content.txtDisplay2}</Text>
            <Text style={stlTxtDisplay3}>{info.content.txtDisplay3}</Text>
          </View>
          <View style={stlColumn}>
            <Image source={info.img1} style={stlImg} />
            <Text style={stlTxtBase}>{info.content.feature1}</Text>
          </View>
          <View style={stlColumn}>
            <Image source={info.img2} style={stlImg} />
            <Text style={stlTxtBase}>{info.content.feature2}</Text>
          </View>
          <View style={stlColumn}>
            <Image source={info.img3} style={stlImg} />
            <Text style={stlTxtBase}>{info.content.feature3}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={stlBtCallAct2} onPress={info.enter}>
            <Text style={stlBtTxtWhite}>{info.content.txtBtn3}</Text>
          </TouchableOpacity>
          <Text style={stlTxtTeam}>{info.content.txtTeam}</Text>
        </View>
        <View style={stlTermsBox}>
          <TouchableOpacity onPress={info.goToTerms} style={stlBtTerms}>
            <Text>{info.content.terms}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// ----------- import Packs
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

// ----------- import Internals
import { useStl, useResize } from '../../../useMorfos';

// ----------- import Images
import logo from '../../images/logo.png';
import sport from '../../images/sport.png';
import detail from '../../images/detail.png';
// import curves from '../../images/curves.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import bg from '../../images/bg.jpg';
import bg_desk from '../../images/bg_desk.jpg';
import btnBg from '../../images/gradient_btn.png';

// #region :: STYLEs *********
const stlBodyView = [];
const stlBanner = {
  desk: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mob: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
const stlTitleTxt = [useStl.txtTitleScreen, { color: '#fff' }];

// --------- BANNER CONTAINER
const stlImgSport = {
  desk: {
    resizeMode: 'contain',
    width: '45%',
    height: '80%',
    position: 'absolute',
    right: '8%',
    bottom: -80,
  },
  mob: {
    width: 268,
    height: 240,

    position: 'absolute',
    bottom: -70,
  },
};
const stlImgDetail = [
  {
    width: 160,
    height: 195,
    resizeMode: 'contain',
    position: 'absolute',
    left: '-4%',
    bottom: '-10%',
  },
];

const stlImgLogo = [{ width: 120, height: 60, marginLeft: 0 }];
const stlContentBann = {
  desk: {
    width: '80%',
  },
  mob: {},
};

// --------- FEATURES
const stlFeatContainer = [
  useStl.flexCenter,
  { marginTop: 160, marginBottom: 80 },
];
const stlWebFrame = {
  desk: {
    width: '80%',
    marginBottom: 80,
    flexDirection: 'row',
  },
  mob: {
    width: '60%',
    marginBottom: 40,
    flexDirection: 'column',
  },
};
const stlTermsBox = [{ marginBottom: 30 }];
const stlImg = [{ width: 60, height: 60 }];
const stlColumn = {
  desk: {
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 0,
  },
  mob: {
    flex: 1,
    paddingHorizontal: 0,
    paddingBottom: 40,
  },
};

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
    // backgroundColor: '#FF3743',
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
const stlSlogan = [{ color: '#fff' }];
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
const txtBase = {
  color: '#555',
  textAlign: 'left',
  marginBottom: 20,
  width: '100%',
};
const stlTxtBase = {
  desk: {
    ...txtBase,
    fontSize: 16,
  },
  mob: {
    ...txtBase,
    fontSize: 12,
  },
};
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
  // ----------- set Conds
  const condDesk = useResize();
  const condSource = condDesk ? bg_desk : bg;

  // ----------- set Return
  return (
    <View style={stlBodyView}>
      {/* ----------- Banner */}
      <ImageBackground source={condSource} style={useResize(stlBanner)}>
        {condDesk && <Image source={detail} style={stlImgDetail} />}
        <View style={useResize(stlContentBann)}>
          <Image source={logo} style={stlImgLogo} />
          <Text style={stlTitleTxt}>{info.content.title}</Text>
          <Text style={stlSlogan}>{info.content.slogan}</Text>
          <Text style={stlTxtEnter}>{info.content.enterUsing}</Text>
          <TouchableOpacity style={stlBtCallAct1} onPress={info.btnGoToTerms}>
            <Text style={stlBtTxtWhite}>{info.content.txtBtn1}</Text>
            <Image source={btnBg} style={stlBtImg} />
          </TouchableOpacity>
        </View>
        <Image source={sport} style={useResize(stlImgSport)} />
      </ImageBackground>

      {/* ----------- App Features */}
      <View style={stlFeatContainer}>
        <View style={useResize(stlWebFrame)}>
          <View style={useResize(stlColumn)}>
            <Text style={stlTxtDisplay1}>{info.content.txtDisplay1}</Text>
            <Text style={stlTxtDisplay2}>{info.content.txtDisplay2}</Text>
            <Text style={stlTxtDisplay3}>{info.content.txtDisplay3}</Text>
          </View>
          <View style={useResize(stlColumn)}>
            <Image source={img1} style={stlImg} />
            <Text style={useResize(stlTxtBase)}>{info.content.feat1}</Text>
          </View>
          <View style={useResize(stlColumn)}>
            <Image source={img2} style={stlImg} />
            <Text style={useResize(stlTxtBase)}>{info.content.feat2}</Text>
          </View>
          <View style={useResize(stlColumn)}>
            <Image source={img3} style={stlImg} />
            <Text style={useResize(stlTxtBase)}>{info.content.feat3}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={stlBtCallAct2} onPress={info.btnGoToTerms}>
            <Text style={stlBtTxtWhite}>{info.content.txtBtn3}</Text>
          </TouchableOpacity>
          <Text style={stlTxtTeam}>{info.content.txtTeam}</Text>
        </View>
        <View style={stlTermsBox}>
          <TouchableOpacity onPress={info.btn} style={stlBtTerms}>
            <Text>{info.content.terms}</Text>
            <Text>VAZIO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

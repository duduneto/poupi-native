// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

// import Internals
import { useStl, UseIcoMoon } from '../useMorfos';
import logo from '../images/logo.png';
import background from '../images/bg.png';
import '../config/styles.css';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stl01 = [
  useStl.flex1,
  useStl.flexCenter,
  { width: '100%', position: 'absolute', top: 0 },
];
let stl01a = [useStl.flexCenter, { width: '100%', height: 400 }];
let stl01b = [useStl.flexBetween, { marginTop: -50 }];
let stl01c = [useStl.flexCenter];
let stl01d = [{ width: 180, height: 100, marginLeft: 20 }];
let stl02 = [useStl.btn, useStl.btnLarge, useStl.bgPrimary];
let stl02a = [useStl.txtPrimaryInverse];
let stl03 = [useStl.flexCenter, { marginBottom: 50 }];
let stl04 = [{ fontSize: 14, color: '#fff', marginTop: 10 }];
let stl04a = [{ fontSize: 18, color: '#fff', marginTop: 20 }];
let stl04b = [
  useStl.txtBase,
  { color: '#fff', marginBottom: 10, textAlign: 'center', fontSize: 12 },
];
let stl05 = [useStl.colBreak, useStl.widthBreak, { marginVertical: 50 }];
let stl05a = [useStl.flex1, useStl.flexCenter, useStl.padBreak];
let stl05b = [
  { color: '#666', fontSize: 16, textAlign: 'center', marginBottom: 20 },
];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
// export const itemList = (item) => (<View>{item}</View>)

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stl01}>
    {/* LOGO + SLOGAN */}
    {/* ------------------------------ */}
    <div className="gradient">
      <ImageBackground source={background} style={stl01a}>
        <View style={stl03}>
          <Image source={logo} style={stl01d} />

          {/* <Text style={stl04}>{info.scContent.naming}</Text> */}
          {/* <Text style={stl04a}>{info.scContent.slogan}</Text> */}
          <span className="type1 naming">{info.scContent.naming}</span>
          <span className="type2 title">{info.scContent.slogan}</span>
          <span className="type1 subtitle">{info.scContent.subtitle}</span>
        </View>
      </ImageBackground>
    </div>
    {/* BTNs */}
    {/* ------------------------------ */}
    <View style={stl01b}>
      <View style={stl01c}>
        <Text style={stl04b}>{info.scContent.enterUsing}</Text>

        {/* <TouchableOpacity style={stl02} onPress={info.signInGoogle}>
          <Text style={stl02a}>{info.scContent.google}</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={stl02} onPress={info.enter}>
          <Text style={stl02a}>Temp Users</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={info.goToTerms}>
        <Text style={stl04b}>{info.scContent.terms}</Text>
      </TouchableOpacity>
    </View>

    <View style={stl05}>
      <View style={stl05a}>
        <Text style={stl05b}>{info.scContent.feature1}</Text>
        <UseIcoMoon name="mobile" size={80} color={'#333'} />
      </View>
      <View style={stl05a}>
        <Text style={stl05b}>{info.scContent.feature2}</Text>
        <UseIcoMoon name="mobile" size={80} color={'#333'} />
      </View>
      <View style={stl05a}>
        <Text style={stl05b}>{info.scContent.feature3}</Text>
        <UseIcoMoon name="mobile" size={80} color={'#333'} />
      </View>
    </View>

    {/* END */}
    {/* ------------------------------ */}
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

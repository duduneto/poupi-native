// #region :: Imports *********

// ----------- import Packs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

// ----------- import Internals
import bgNav from '../../../images/bg_nav.png';
import bgNav2 from '../../../images/bg_nav2.png';
import { useStl, UseIcoMoon, useRouter } from '../../../../useMorfos';
import { SideLeft, SideRight } from '../..';

// #endregion *********

// #region :: STYLEs *********
const stlBODY1 = [useStl.pad20, useStl.flex1];
const stlNavView = [
  {
    width: '100%',
    height: 60,
    overflow: 'hidden',
  },
];
const stlBGNAV2 = [
  {
    width: '100%',
    height: 120,
    overflow: 'hidden',
  },
];
const stlBGSM = [
  {
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    height: 60,
    top: 0,
    righ: 0,
    left: 0,
    bottom: 0,
  },
];
const stlBGLG = [
  {
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    height: 180,
    top: 0,
    righ: 0,
    left: 0,
    bottom: 0,
  },
];
const stlNAV1 = [useStl.bgPrimary, { zIndex: 2 }];
const stlNAV1a = [useStl.navbarView];
const stlNAV1b = [useStl.leftBox];
const stlNAV1c = [useStl.centerBox];
const stlNAV1d = [useStl.rightBox];
const stlNAV2 = [useStl.titlePageLeft];
const stlBODY1e = [useStl.longBar, useStl.bgPrimary, { position: 'relative' }];
const stlBODY4 = [useStl.btnFab, { backgroundColor: '#333' }];
// const stlBODY4b = [
//   {
//     position: 'absolute',
//     elevation: 15,
//     zIndex: 100,
//     width: '100%',
//     height: '100%',
//   },
// ];

const stlSCROLLVIEW = [stlBODY1, { backgroundColor: '#f0f0f0' }];
// const stlBODY3 = []

// #endregion *********

export default props => {
  // ----------- set Hooks
  let [sttMenu, setMenu] = React.useState(false);
  let sttPermissionAdm = useSelector(state => state.sttPermissionAdm);
  let callRouter = useRouter();
  let dispatch = useDispatch();

  // ----------- set BUTTONs
  let toggleMenu = () => setMenu(!sttMenu);
  let condMenu = sttMenu;

  const goBack = () => {
    dispatch({ type: 'clearAction', sttName: 'sttEditFields' });
    callRouter(props.back);
  };

  let condGoTo = () => (!props.back ? toggleMenu() : goBack());

  const longBar = props.type === 'long';
  const title = props.title;
  const icon = props.icon;

  let condFab = sttPermissionAdm && props.fab;

  let goTo = () => callRouter(props.fab);

  // ----------- set Return
  let infoReturn = {
    toggleMenu,
    condGoTo,
    condFab,
    children: props.children,
    condMenu,
    longBar,
    title,
    icon,
    goTo,
  };

  return <ViewDF info={infoReturn} />;
};

const ViewDF = ({ info }) => {
  const condShadow = info.longBar ? null : useStl.shadowBar;

  return (
    <>
      {/* MENU */}
      <SideLeft content={info.content} />

      <View style={stlNAV1}>
        <ImageBackground
          source={bgNav}
          style={[stlNavView, condShadow]}
          imageStyle={stlBGSM}
        >
          <View style={[stlNAV1a]}>
            <TouchableOpacity style={stlNAV1b} onPress={info.condGoTo}>
              <UseIcoMoon name={info.icon} size={20} color={'#fff'} />
            </TouchableOpacity>
            <View style={stlNAV1c}>
              <Text style={stlNAV2}>{info.title}</Text>
            </View>

            <View style={stlNAV1d} />
          </View>
        </ImageBackground>
      </View>

      <ScrollView style={!info.longBar && stlSCROLLVIEW}>
        {info.longBar && (
          <View style={stlBODY1e}>
            <ImageBackground
              source={bgNav2}
              style={[stlBGNAV2]}
              imageStyle={stlBGLG}
            />
          </View>
        )}
        {info.children}
      </ScrollView>

      {info.condFab && info.condFab ? (
        <TouchableOpacity style={stlBODY4} onPress={info.goTo}>
          <UseIcoMoon name={'plus'} size={22} color={'#fff'} />
        </TouchableOpacity>
      ) : (
        <></>
      )}

      <SideRight content={info.content} />
      {/* /}
      {info.condMenu && (
        <View style={stlBODY4b}>
          <Cp02 path={info.path} toggleMenu={info.toggleMenu} />
        </View>
      )}
      {/* */}
    </>
  );
};

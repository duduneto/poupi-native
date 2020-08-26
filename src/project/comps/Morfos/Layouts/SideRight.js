// ----------- import Packs
import React from 'react';
import { View } from 'react-native';

// ----------- import Internals
import { useStl, useData } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlSideMenu = [useStl.rightBar];

// #endregion *********

export default ({ children }) => {
  // ----------- set Cond Show Menu
  const showRight = useData('sttRoute.showRight');
  const condShow = showRight === true;

  return condShow && <View style={stlSideMenu}>{children}</View>;
};

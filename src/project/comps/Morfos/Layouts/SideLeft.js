// ----------- import Packs
import React from 'react';
import { View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlSideMenu = [useStl.leftBar];

// #endregion *********

export default ({ children }) => {
  return <View style={stlSideMenu}>{children}</View>;
};

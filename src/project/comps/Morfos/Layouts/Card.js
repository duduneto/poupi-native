// ----------- import Packs
import React from 'react';
import { View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlCard = [useStl.cardItemList, useStl.flexRow];

// #endregion *********

export default ({ children }) => {
  return <View style={stlCard}>{children}</View>;
};

// ----------- import Packs
import React from 'react';
import { View } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../useMorfos';
import { ItemList } from '../../comps';

// #region :: STYLEs *********

const stlBodyView = [
  useStl.flex1,
  useStl.pad20,
  useStl.bgSc,
  useStl.flexTopCenter,
];

// #endregion *********

export default ({ info }) => {
  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}
      <ItemList content={info.content} />

      {/* ----------- Elements */}
      {/* ... */}
    </View>
  );
};

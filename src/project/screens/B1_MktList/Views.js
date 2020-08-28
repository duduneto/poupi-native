// ----------- import Packs
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl, useRouter } from '../../../useMorfos';
import { ItemList, Banner, List } from '../../comps';

// #region :: STYLEs *********

const stlBodyView = [useStl.flex1, useStl.flexTopCenter];

// #endregion *********

export default ({ info }) => {
  const { callRouter } = useRouter();
  const goTo = () => {
    callRouter('addMkt');
  };

  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}

      <Banner content={info.content} />
      <List content={info.content} />

      {/* ----------- Elements */}
      {/* ... */}
    </View>
  );
};

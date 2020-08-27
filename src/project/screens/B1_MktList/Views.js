// ----------- import Packs
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl, useRouter } from '../../../useMorfos';
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
  const { callRouter } = useRouter();
  const goTo = () => {
    callRouter('addMkt');
  };

  return (
    <View style={stlBodyView}>
      {/* ----------- PARTs */}

      <TouchableOpacity onPress={goTo}>
        <Text>ADD MERCADO</Text>
      </TouchableOpacity>
      <ItemList content={info.content} />

      {/* ----------- Elements */}
      {/* ... */}
    </View>
  );
};

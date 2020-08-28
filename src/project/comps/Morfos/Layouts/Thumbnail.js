// ----------- import Packs
import React from 'react';
import { View, Image } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';
// import { Card } from '../../';

// #region :: STYLEs *********

const stlImgContainer = [useStl.thumbnail];
const stlImg = [useStl.imgFull];

// #endregion *********

export default info => {
  return (
    <View style={stlImgContainer}>
      <Image source={{ uri: info.src }} style={stlImg} />
    </View>
  );
};

// ----------- import Packs
import React from 'react';
import { View, Image } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';
import src from '../../../images/carrefour.jpg';
// import { Card } from '../../';

// #region :: STYLEs *********

const stlImgContainer = [useStl.thumbnail];
const stlImg = [useStl.imgFull];

// #endregion *********

export default () => {
  return (
    <View style={stlImgContainer}>
      <Image source={src} style={stlImg} />
    </View>
  );
};

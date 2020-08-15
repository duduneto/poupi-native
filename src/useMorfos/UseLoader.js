// ----------- import Packs
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// ----------- import Internals
import { primaryColor } from '../config/styles';
import useStl from './useStl';
import { timeFunc } from './utils';

// ----------- set Styles
const stlCenter = [useStl.flexCenter, useStl.flex1];

// ----------- set Default Component
export default props => timeFunc(<TimeEnd {...props} />);

// ----------- set Default Loader
const TimeEnd = props => {
  // ----------- set Size Initial State
  const { size = 25, color = primaryColor } = props;

  // ----------- set Return
  return (
    <View style={stlCenter}>
      <ActivityIndicator size={size} color={color} {...props} />
    </View>
  );
};

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
export default props => timeFunc(<TimeTrue {...props} />);

// ----------- set Default Loader
const TimeTrue = props => {
  const condSize = props.size ?? 15;

  return (
    <View style={stlCenter}>
      <ActivityIndicator
        size={condSize}
        {...props}
        color={props.color || primaryColor}
      />
    </View>
  );
};

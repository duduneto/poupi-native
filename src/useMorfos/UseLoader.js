// ----------- import Packs
import React from 'react';
import { ActivityIndicator } from 'react-native';

// ----------- import Internals
import { primaryColor } from '../config/styles';

// ----------- set Default Component
export default props => {
  const condSize = props.size ?? 15;
  return (
    <ActivityIndicator
      // style={props.style}
      size={condSize}
      {...props}
      color={props.color || primaryColor}
    />
  );
};

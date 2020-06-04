// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { ActivityIndicator } from 'react-native';

// import Internals
import { primaryColor } from '../config/styles';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function UseLoader(props) {
  return (
    <ActivityIndicator
      // style={props.style}
      // size={props.size}
      {...props}
      color={props.color || primaryColor}
    />
  );
}

// ---------------
// #endregion
// ***************************************

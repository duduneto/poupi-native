// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
// import Internal Components
import { useStyle } from './';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function UseLoader() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,55,.4)',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 2,
        opacity: 0.9
      }}
    >
      <ActivityIndicator size="large" color="purple" />
    </View>
  );
}

// ---------------
// #endregion
// ***************************************

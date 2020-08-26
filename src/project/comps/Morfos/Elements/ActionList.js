// ----------- import Packs
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// ----------- import Internals
import { useStl } from '../../../../useMorfos';

// #region :: STYLEs *********

const stlBtn = [];
const stlTxt = [];

// #endregion *********

export default ({ label }) => {
  return (
    <TouchableOpacity style={stlBtn}>
      <Text style={stlTxt}>{label}</Text>
    </TouchableOpacity>
  );
};

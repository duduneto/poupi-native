// ----------- import Packs
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// ----------- import Internals
import { primaryColor } from '../config/styles';
import useStl from './useStl';
import { useData } from '.';
import { useDispatch } from 'react-redux';
// import { timeFunc } from './utils';

// ----------- set Styles
const stlCenter = [useStl.flexCenter, useStl.flex1];

// ----------- set Default Component
// export default props => timeFunc(<TimeEnd {...props} />);

// ----------- set Default Loader
export default (props = {}) => {
  // ----------- set effects
  const fxCleanData = () => () =>
    dispatch({ type: 'base_CLEAR_STT', value: data });

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxCleanData, []);

  // ----------- set Data
  const { size = 25, color = primaryColor, data, children } = props;
  const showValidation = useData(data);

  // ----------- set Return
  return showValidation ? (
    children
  ) : (
    <View style={stlCenter}>
      <ActivityIndicator size={size} color={color} {...props} />
    </View>
  );
};

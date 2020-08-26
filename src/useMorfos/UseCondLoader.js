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
  // ----------- set props
  const { data, children } = props;

  // ----------- set effects
  const fxLeaveCleanData = () => () => {
    dispatch({ type: 'base_CLEAR_STT', value: data });
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxLeaveCleanData, []);

  // ----------- set Data
  const showValidation = useData(data);

  // ----------- set Return
  return showValidation ? children : CompLoader(props);
};

// ----------- set Loader Component
const CompLoader = props => {
  const { size = 25, color = primaryColor } = props;
  return (
    <View style={stlCenter}>
      <ActivityIndicator size={size} color={color} {...props} />
    </View>
  );
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

<UseInitData reducer={'C4_InitData'}>
  <UseCondLoader data={'C4.condList'}>
  
    <UseList data={'C4.productList'}>
      {(itemId, noItem) =>
        noItem ? <NoItemView /> : <ProdItem itemId={itemId} />
      }
    </UseList>
    
    <UseList data={'C4.forms.iptsArr'}>
      {itemId => <IptItem itemId={itemId} />}
    </UseList>

  </UseCondLoader>
</UseInitData>
  
*/

// ---------------
// #endregion
// ***************************************

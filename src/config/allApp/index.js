// ----------- import Packs
import React from 'react';
import { Platform } from 'react-native';

// ---------- import Internals
import { UseInitData, useData } from '../../useMorfos';
import useListenResize from './useListenResize';
import useCurrSc from './useCurrSc';
import useCurrGroup from './useCurrGroup';
import useGroupSc from './useGroupSc';
import useUrlHistory from './useUrlHistory';
import useUrlManualChange from './useUrlManualChange';

// ----------- set All App Screen
export default () => (
  <UseInitData reducer={'base_InitRoutes'} children={<SelectRoute />} />
);

function SelectRoute() {
  // ----------- set Resize Screen
  useListenResize();

  // ----------- set Group + Screen
  const CompScreen = useCurrSc();
  const arrGroups = useCurrGroup();
  const CompGroupSc = useGroupSc(arrGroups, CompScreen);

  // ----------- set Return
  const condWeb = Platform.OS === 'web';
  const condReturn = condWeb ? <WebRoute Comp={CompGroupSc} /> : CompGroupSc;
  return condReturn;
}

function WebRoute({ Comp }) {
  // ----------- set Change Url
  useUrlManualChange();
  useUrlHistory();

  // ----------- set Return
  return Comp;
}

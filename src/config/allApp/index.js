// ----------- import Packs
import React from 'react';
import { Platform } from 'react-native';

// ---------- import Internals
import { UseInitData, useData } from '../../useMorfos';
import useListenResize from './useListenResize';
import useCurrSc from './useCurrSc';
import useCurrGroup from './useCurrGroup';
import useGroupSc from './useGroupSc';
import useListenUrlHistory from './useListenUrlHistory';
import useUrlManual from './useUrlManual';

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
  // ----------- set Data
  const currRoute = useData('sttRoute.path');

  // ----------- set Change Url
  useListenUrlHistory();
  const condUrlChangedManual = useUrlManual();
  if (!condUrlChangedManual) {
    window.history.pushState(null, '', '/' + currRoute);
  }

  // ----------- set Return
  return Comp;
}

// ----------- import Packs
import React from 'react';

// ---------- import Internals
import { UseInitData, useData } from '../../useMorfos';
import useListenResize from './useListenResize';
import useCurrSc from './useCurrSc';
import useCurrGroup from './useCurrGroup';
import useGroupSc from './useGroupSc';

// ----------- set All App Screen
export default () => (
  <UseInitData reducer={'base_InitRoutes'} children={<SelectedRoute />} />
);

function SelectedRoute() {
  // ----------- set Resize Screen
  useListenResize();

  // ----------- set Group + Screen
  const CompScreen = useCurrSc();
  const arrGroups = useCurrGroup();
  const CompGroupSc = useGroupSc(arrGroups, CompScreen);

  // ----------- set Return
  return CompGroupSc;
}

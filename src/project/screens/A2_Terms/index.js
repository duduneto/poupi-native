// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'terms',
  groupSc: 'pub2',

  scCode: 'A2',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('A2.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('example');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'A2_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

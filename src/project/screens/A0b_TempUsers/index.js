// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'tempUsers',
  groupSc: 'pub2',

  scCode: 'A0b',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('A0b.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'A0b_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

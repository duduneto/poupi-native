// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'addMkt',
  groupSc: 'pub2',

  scCode: 'C1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('C1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'C1_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

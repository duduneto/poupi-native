// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'mktList',
  groupSc: 'pub2',
  condBigSc: true,

  scCode: 'B1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('B1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'B1_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

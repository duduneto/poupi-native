// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'path',
  groupSc: 'pub1',

  scCode: 'X0',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('X0.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Return
  const infoView = { content, btnGoto };

  return (
    <UseInitData reducer={'X0_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

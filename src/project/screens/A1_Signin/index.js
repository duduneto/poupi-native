// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'pub1',

  scCode: 'A1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData('A1.scContent');

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoToTerms = () => callRouter('terms');

  // ----------- set Return
  const infoView = { content, btnGoToTerms };

  return (
    <UseInitData reducer={'A1_InitContentData'}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

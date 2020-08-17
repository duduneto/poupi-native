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
  const content = useData(`${infoSc.scCode}.scContent`);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoToTerms = () => callRouter('terms');

  // ----------- set Return
  const initSignin = {
    selSttCond: `${infoSc.scCode}.condData`,
    reducerName: `${infoSc.scCode}_InitContentData`,
  };
  const infoView = {
    // --- infoSc
    content,
    // --- btns
    btnGoToTerms,
  };

  return (
    <UseInitData info={initSignin}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData, useData } from '../../../useMorfos';

// ----------- set Info Screen
export const infoSc = {
  path: 'example',
  groupSc: 'pub2',

  scCode: 'X',
};

// ----------- set Default Component
export default () => {
  // ----------- set Data
  const content = useData(`${infoSc.scCode}.scContent`);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Init Signin Data
  const initSignin = {
    selSttCond: `${infoSc.scCode}.condData`,
    reducerName: `${infoSc.scCode}_InitContentData`,
  };

  // ----------- set Return
  const infoView = {
    // --- infoSc
    content,
    // --- btns
    btnGoto,
    // userId,
  };

  return (
    <UseInitData info={initSignin}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

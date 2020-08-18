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
  const content = useData(`${infoSc.scCode}.scContent`);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoto = () => callRouter('signin');

  // ----------- set Init Signin Data
  const initComponent = {
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
    <UseInitData info={initComponent}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};
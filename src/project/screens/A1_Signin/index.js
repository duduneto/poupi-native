// ----------- import Packs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, UseInitData } from '../../../useMorfos';
import { setPath } from '../../../useMorfos/utils';

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'pub1',

  scCode: 'A1',
};

// ----------- set Default Component
export default () => {
  // ----------- set Selectors
  const selContent = stt => setPath(stt, `${infoSc.scCode}.scContent`);
  const content = useSelector(selContent);

  // ----------- set Hooks
  const { callRouter } = useRouter();

  // ----------- set Routes
  const btnGoToTerms = () => callRouter('terms');

  // ----------- set Init Signin Data
  const initSignin = {
    selSttCond: `${infoSc.scCode}.condData`,
    reducerName: `${infoSc.scCode}_InitContentData`,
  };

  // ----------- set Info View
  const infoView = {
    // --- infoSc
    content,
    // --- btns
    btnGoToTerms,
    // userId,
  };

  // ----------- set Return
  return (
    <UseInitData info={initSignin}>
      <ViewDF info={infoView} />
    </UseInitData>
  );
};

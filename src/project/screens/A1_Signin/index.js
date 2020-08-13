// ----------- import Packs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, utils, UseLoader } from '../../../useMorfos';

// ----------- set Utils
const { setPath } = utils;

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'priv1',

  scCode: 'X0',
};

// ----------- set Default Component
export default () => {
  // ----------- set Selectors
  const selCondData = stt => setPath(stt, `${infoSc.scCode}.condData`);
  const condData = useSelector(selCondData);

  // ----------- set Effects
  const fxInitData = () =>
    dispatch({ type: `${infoSc.scCode}_InitContentData` });

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxInitData, []);

  // ----------- set Return
  const condReturn = condData ? <DataTrue /> : <UseLoader />;
  return condReturn;
};

export function DataTrue() {
  // ----------- set Selectors
  const content = useSelector(stt =>
    setPath(stt, `${infoSc.scCode}.scContent`),
  );

  // ----------- set Hooks
  const dispatch = useDispatch();
  const callRouter = useRouter();

  // ----------- set Router
  const btnGoto = () => callRouter('terms');

  // ----------- set Return
  const infoReturn = {
    // --- infoSc
    content,
    // --- btns
    btnGoto,
    // userId,
  };
  return <ViewDF info={infoReturn} />;
}

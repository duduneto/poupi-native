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

  scCode: 'X',
};

// ----------- set Default Component
export default () => {
  // ----------- set Selectors
  const selCondData = stt => setPath(stt, 'X.condData');
  const condData = useSelector(selCondData);

  // ----------- set Effects
  const fxInitData = () => dispatch({ type: 'X_InitData' });

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxInitData, []);

  // ----------- set Return
  const condReturn = condData ? <DataTrue /> : <UseLoader />;
  return condReturn;
};

export function DataTrue() {
  // ----------- set Selectors
  const content = useSelector(stt => setPath(stt, 'X.scContent'));

  // ----------- set Hooks
  const dispatch = useDispatch();
  const callRouter = useRouter();
  const [sttCount, setCount] = React.useState(0);

  // ----------- set Btns
  const btnIncrement = () => setCount(sttCount + 1);
  const btnDecrement = () => sttCount >= 0 && setCount(sttCount - 1);

  // ----------- set Router
  const btnGoto = () => callRouter('terms');

  // ----------- set Return
  const infoReturn = {
    // --- infoSc
    content,
    // --- counter
    sttCount,
    btnIncrement,
    btnDecrement,
    // --- btns
    btnGoto,
    // userId,
  };
  return <ViewDF info={infoReturn} />;
}

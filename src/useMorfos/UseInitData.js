// ---------- import Packs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------- import Internals
import { UseLoader } from '../useMorfos';
import { setPath } from '../useMorfos/utils';

export default ({ children, info }) => {
  // ----------- set Info
  const { selSttCond, reducerName } = info;

  // ----------- set Selectors
  const selInitData = stt => setPath(stt, selSttCond);
  const initData = useSelector(selInitData);

  // ----------- set Effects
  const fxInitData = () => dispatch({ type: reducerName });

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxInitData, []);

  // ----------- set Return
  const condReturn = initData;

  return condReturn ? children : UseLoader();
};

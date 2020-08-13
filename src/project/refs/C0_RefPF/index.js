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
};

// ----------- set Default Component
export default () => {
  // ----------- set Selectors
  const selCondData = stt => setPath(stt, 'C0.userData.condData');

  // ----------- set Hooks
  const condData = useSelector(selCondData);

  // ----------- set Return
  const condReturn = condData ? <DataTrue /> : <UseLoader />;
  return condReturn;
};

export function DataTrue() {
  // ----------- set Hooks
  const dispatch = useDispatch();
  // const userData = useSelector(selCondData);
  const callRouter = useRouter();
  const [sttCount, setCount] = React.useState(0);

  // ----------- set Btns
  const btnIncrement = () => setCount(sttCount + 1);
  const btnDecrement = () => sttCount >= 0 && setCount(sttCount - 1);

  // ----------- set Router
  const btnGoto = () => callRouter('terms');
  // const btnGoto = () => callRouter('terms');
  const txtBtn = 'Ir para os TERMOS';

  // ----------- set Return
  const infoReturn = {
    // --- infoSc
    title: infoSc.title,
    subTitle: infoSc.subTitle,
    description: infoSc.description,
    // --- counter
    sttCount,
    btnIncrement,
    btnDecrement,
    // --- btns
    btnGoto,
    txtBtn,
    // userId,
  };
  return <ViewDF info={infoReturn} />;
}

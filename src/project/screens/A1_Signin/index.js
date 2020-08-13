// ----------- import Packs
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ----------- import Internals
import ViewDF from './Views';
import { useRouter, utils, UseLoader } from '../../../useMorfos';

// ----------- import Images
import logo from '../../images/logo.png';
import sport from '../../images/sport.png';
import detail from '../../images/detail.png';
import curves from '../../images/curves.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import background from '../../images/bg.jpg';
import btnBg from '../../images/gradient_btn.png';

// ----------- set Utils
const { setPath } = utils;

// ----------- set Info Screen
export const infoSc = {
  path: 'signin',
  groupSc: 'priv1',

  scCode: 'A1',
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
    // --- imgs
    background,
    curves,
    detail,
    sport,
    btnBg,
    logo,
    img1,
    img2,
    img3,
    // --- btns
    btnGoto,
    // userId,
  };
  return <ViewDF info={infoReturn} />;
}

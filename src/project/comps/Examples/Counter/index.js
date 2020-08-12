// ---------- import Packs
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { utils } from '/src/useMorfos';

// ---------- import Internals
import ViewDF from './Views';
// import { ExampleRedux as ViewDF } from '/src/screens/comps';
import { useRouter, UseInitData } from '../../../../useMorfos';

// ---------- set infoSc
export const infoSc = {
  // ----------
  path: 'signin',
  groupSc: 'priv1',
  scCode: 'A1',
};

export default () => {
  // ---------- set Vars
  const { scCode } = infoSc;

  // ---------- set Hooks
  const callRouter = useRouter();

  // ---------- set Router
  const btnGoto = () => callRouter('terms');

  // ---------- set Init
  const InitSc = ({ children }) => {
    const infoInit = {
      setSel: `rdScs.${scCode}`,
      setAction: `initData${scCode}`,
    };
    return <UseInitData info={infoInit} children={children} />;
  };

  // ---------- set Return
  const infoReturn = { scCode, btnGoto };
  return (
    <InitSc>
      <ViewDF info={infoReturn} />
    </InitSc>
  );
};

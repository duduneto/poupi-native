// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
// import CurrSC from '../../project/screens/X_Example';
import CurrSC from '../../project/screens/A1_Signin';
import { useResponsive } from '../../useMorfos';

// ----------- set All App Screen
export default () => {
  useResponsive();

  // ----------- set Return
  return <CurrSC />;
};

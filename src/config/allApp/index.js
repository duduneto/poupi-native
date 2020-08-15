// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ---------- import Internals
// import CurrSC from '../../project/screens/A2_Terms';
import CurrSC from '../../project/screens/A1_Signin';
import useResponsive from './useResponsive';

// ----------- set All App Screen
export default () => {
  // ----------- set Hooks
  useResponsive();

  // ----------- set Return
  return <CurrSC />;
};

// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
// import CurrSC from '../../project/screens/X_Example';
import CurrSC from '../../project/screens/A1_Signin';
import { condWidth } from '../condPacks/dimensions';

// ----------- set All App Screen
export default () => {
  // ----------- set Effects
  const fxCondDesk = () => {
    const setResize = () =>
      dispatch({ type: 'base_CondDesktop', value: condWidth() });

    window.addEventListener('resize', setResize);
    return () => window.removeEventListener('resize', setResize);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxCondDesk, []);

  // ----------- set Return
  return <CurrSC />;
};

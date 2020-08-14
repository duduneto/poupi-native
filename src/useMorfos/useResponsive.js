// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { condWidth } from '../config/condPacks/dimensions';

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
};

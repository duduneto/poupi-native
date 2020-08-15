// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { condWidth } from '../condPacks/dimensions';

export default () => {
  // ----------- set Effects
  const callResize = () =>
    dispatch({ type: 'base_ListenResize', value: condWidth() });

  const fxResize = () => {
    window.addEventListener('resize', callResize);
    return () => window.removeEventListener('resize', callResize);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxResize, []);
  React.useEffect(callResize, []);
};

// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import screensInfo from '../../project/screens';

// ----------- set Init All Routes
export default () => {
  // ----------- set Effects
  const fxInitRoutes = () =>
    dispatch({ type: 'base_InitRoutes', value: screensInfo });

  // ----------- set Hooks
  const dispatch = useDispatch();
  React.useEffect(fxInitRoutes, []);
};

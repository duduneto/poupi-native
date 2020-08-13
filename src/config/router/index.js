// ----------- import Packs
import React from 'react';
// import { useDispatch } from 'react-redux';

// ---------- import Internals
// import CurrSC from '../../project/screens/X_Example';
import CurrSC from '../../project/screens/A1_Signin';
// import { useStl } from '../../useMorfos';

// ----------- set All App Screen
export default () => {
  // ----------- set Effects
  // const fxCondDesk = () => dispatch({ type: '' });
  const condDesk2 = window.screen.width;
  const fxCondDesk = () => condDesk2 === 650 && console.log('cheguei!!!');

  // ----------- set Hooks
  // const dispatch = useDispatch();
  React.useEffect(fxCondDesk, [condDesk2]);

  // ----------- set Return
  return <CurrSC />;
};

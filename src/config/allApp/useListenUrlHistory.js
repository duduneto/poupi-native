// ----------- import Packs
import React from 'react';

// ---------- import Internals
import { useRouter } from '../../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Effects
  const fxInitHistory = () => {
    const pathName = window.location.pathname.split('/')[1];
    const changeHistory = () => callRouter(pathName);

    const callListener = () =>
      window.addEventListener('popstate', changeHistory);
    callListener();
    return () => {
      callListener();
    };
  };

  // ----------- set Hooks
  const { callRouter } = useRouter();
  React.useEffect(fxInitHistory, []);
};

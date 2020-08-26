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

    callListener();
    function callListener() {
      return window.addEventListener('popstate', changeHistory);
    }
    return () => {
      callListener();
    };
  };

  // ----------- set Hooks
  const { callRouter } = useRouter();
  React.useEffect(fxInitHistory, []);
};

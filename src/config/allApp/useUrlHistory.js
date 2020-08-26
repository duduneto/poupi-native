// @ts-check
// ----------- import Packs
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import { useData, useRouter } from '../../useMorfos';
import { ezLog } from '../../useMorfos/utils';

export default () => {
  // ----------- set Data
  const dispatch = useDispatch();
  const currRoute = useData('sttRoute.path');
  const condNoPush = useData('sttRoute.condNoPush');

  // ----------- set Effects
  const fxPush = () => {
    if (!condNoPush) {
      push(`/${currRoute}`);
    } else {
      dispatch({ type: 'base_condPushTrue' });
    }
  };

  // ----------- set Hooks
  const { push } = useLocation();
  React.useEffect(fxPush, [currRoute]);
};

/****************************
 * Link de onde foi retirado a ideia do código abaixo:
 * https://gist.github.com/lenkan/357b006dd31a8c78f659430467369ea7
 */

function useLocation() {
  /**
   * @type {Array<() => void>}
   */
  const listeners = [];

  // ----------- set Effects
  const fxHistory = () => {
    const callRouter = () => {
      const cleanPath = getCurrentLocation().pathname.split('/')[1];
      dispatch({ type: 'base_History', value: cleanPath });
      handleChange();
    };
    window.addEventListener('popstate', callRouter);
    return () => window.removeEventListener('popstate', callRouter);
  };

  const fxListeners = () => {
    listeners.push(handleChange);
    return () => listeners.splice(listeners.indexOf(handleChange), 1);
  };

  // ----------- set Hooks
  const dispatch = useDispatch();
  const [{ pathname, search }, setLocation] = useState(getCurrentLocation());
  useEffect(fxHistory, []);
  useEffect(fxListeners, []);

  // ----------- set Functions
  function handleChange() {
    setLocation(getCurrentLocation());
  }

  function notify() {
    listeners.forEach(listener => listener());
  }

  function getCurrentLocation() {
    return {
      pathname: window.location.pathname,
      search: window.location.search,
    };
  }

  // ----------- set Change Urls

  /**
   * @param {string} url
   */
  function push(url) {
    window.history.pushState(null, null, url);
    notify();
  }

  /**
   * @param {string} url
   */
  function replace(url) {
    window.history.replaceState(null, null, url);
    notify();
  }

  // ----------- set Return
  return {
    push,
    replace,
    pathname,
    search,
  };
}

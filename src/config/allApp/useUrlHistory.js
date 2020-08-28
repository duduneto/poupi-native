// @ts-check
// ----------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ----------- import Internals
import { useData } from '../../useMorfos';
import { ezLog } from '../../useMorfos/utils';

export default () => {
  // ----------- set Data
  const dispatch = useDispatch();
  const currRoute = useData('sttRoute.path');
  const condNoPush = useData('sttRoute.condNoPush');

  // ----------- set Ref History
  const ref = {
    cleanPath: () => ref.currLocation().pathname.split('/')[1],

    /**
     * Call when change route state
     * @type {() => *}
     */
    fxPush: () => {
      const condReload = currRoute !== ref.cleanPath();
      const condPush = !condNoPush && condReload;
      if (condPush) {
        ezLog('push');
        ref.push(`/${currRoute}`);
      } else {
        dispatch({ type: 'base_condPushTrue' });
      }
    },

    /****************************
     * Link de onde foi retirado a ideia do código abaixo:
     * https://gist.github.com/lenkan/357b006dd31a8c78f659430467369ea7
     */

    currLocation() {
      return {
        pathname: window.location.pathname,
        search: window.location.search,
      };
    },

    /**
     * @type {Array<() => void>}
     */

    listeners: [],

    // ----------- set Effects
    fxListeners: () => {
      ref.listeners.push(ref.handleChange);
      return () =>
        ref.listeners.splice(ref.listeners.indexOf(ref.handleChange), 1);
    },

    fxHistory: () => {
      const callRouter = () => {
        dispatch({ type: 'base_History', value: ref.cleanPath() });
        ref.handleChange();
      };
      window.addEventListener('popstate', callRouter);
      return () => window.removeEventListener('popstate', callRouter);
    },

    // ----------- set Functions
    handleChange() {
      setLocation(ref.currLocation());
    },

    notify() {
      ref.listeners.forEach(listener => listener());
    },

    // ----------- set Change Urls

    /**
     * @param {string} url
     */

    push(url) {
      window.history.pushState(null, null, url);
      ref.notify();
    },

    /**
     * @param {string} url
     */

    replace(url) {
      window.history.replaceState(null, null, url);
      ref.notify();
    },
  };

  // ----------- set Hooks
  const [{ pathname, search }, setLocation] = React.useState(
    ref.currLocation(),
  );
  React.useEffect(ref.fxHistory, []);
  React.useEffect(ref.fxPush, [currRoute]);
  React.useEffect(ref.fxListeners, []);
};

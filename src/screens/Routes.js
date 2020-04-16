// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {useSelector} from 'react-redux';
import {Platform} from 'react-native';

// import Internals
import Editor from './Sc02_Editor';
import Home from './Sc01_Home';
import Sc404 from './Sc_404';
import {useRouter, useChangeRd} from '../useMorfos';

// ---------------
// #endregion
// ***************************************

let callRoutes = (mainRoute, ClearStorage) => {
  let routes = {
    home: <Home />,
    editor: <Editor />,
    error: <Sc404 />,
    clear: <ClearStorage />,
  };

  let condError = routes[mainRoute] === undefined;
  let goto = condError ? 'error' : mainRoute;
  let selectedRoute = routes[goto];

  return selectedRoute;
};

export default function InitRoutes() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let callRouter = useRouter();
  let mainRoute = useSelector(state => state.rdRoute.main);
  let condWeb = Platform.OS === 'web';
  React.useEffect(() => condWeb && initGotoUrl(), [condWeb, initGotoUrl]);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let initGotoUrl = () => {
    let pathName = window.location.pathname.split('/')[1];
    let gotoUrl = pathName === '' ? 'home' : pathName;
    window.history.pushState(null, '', '/' + gotoUrl);

    if (mainRoute !== gotoUrl) {
      callRouter(gotoUrl);
    }
  };

  let ClearStorage = () => {
    let callRouter = useRouter();
    let changeRd = useChangeRd();
    // FALTA: ver como sestar o storage no nativo lá no SYNC (add pack nativo)
    changeRd({clearAll: true});
    callRouter('home');
    return <></>;
  };

  // force clear url

  if (condWeb) {
    let pathName = window.location.pathname.split('/')[1];
    let condClear = pathName === 'clear';
    mainRoute = condClear ? 'clear' : mainRoute;
  }

  // ---------------
  // #endregion
  // ***************************************

  return callRoutes(mainRoute, ClearStorage);
}

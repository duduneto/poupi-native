// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {useSelector} from 'react-redux';
import {Platform} from 'react-native';

// import Internals
import Sc01a from './Sc01a__SignIn';
import Sc01b from './Sc01b__Terms';
import Sc01c from './Sc01c__Onboarding';
import Sc02a from './Sc02a__ItemsList';
import Sc03a from './Sc03a__MyPf';
import Sc03b from './Sc03b__ItemPf';
import Sc04a from './Sc04a__AddItem';

import Sc404 from './Sc_404';
import {useRouter, useChangeRd} from '../useMorfos';

// ---------------
// #endregion
// ***************************************

let callRoutes = (mainRoute, ClearStorage) => {
  let routes = {
    // public
    signin: <Sc01a />,
    terms: <Sc01b />,
    onboarding: <Sc01c />,

    // private
    itemsList: <Sc02a />,
    myProfile: <Sc03a />,
    itemProfile: <Sc03b />,
    addItem: <Sc04a />,

    // Utils / Feedback
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
    let gotoUrl = pathName === '' ? 'signin' : pathName;
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
    callRouter('signin');
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

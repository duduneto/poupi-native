// import Packages
import React from 'react';
import { Platform } from 'react-native';
import { useDispatch } from 'react-redux';

// import Internals

export default info => {
  // set Hooks
  const dispatch = useDispatch();

  const Router = goto => {
    if (Platform.OS === 'web') {
      window.history.pushState(null, '', `/${goto}`);
    }

    dispatch({
      type: 'setRoute',
      value: goto,
    });
  };

  const Redirect = path => {
    Router(path);
    return <></>;
  };

  const condReturn = info === 'redirect' ? Redirect : Router;

  return condReturn;
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // set Hooks
  const callRouter = useRouter();

  // function Call
  // callRouter("home");

  - - or - -

  // set Hooks
  const callRedirect = useRouter('redirect');

  // function Call
  // let condReturn = sttAuthUser ? children : callRedirect("signin");

*/

// ---------------
// #endregion
// ***************************************

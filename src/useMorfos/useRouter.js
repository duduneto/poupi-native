// import Packages
// import React from "react";
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';

// import Internals

export default () => {
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

  return Router;
};

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // set Hooks
  const callRouter = useRouter();

  // function Call
  // callRouter("home");

*/

// ---------------
// #endregion
// ***************************************

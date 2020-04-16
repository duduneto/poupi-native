// import Packages
// import React from "react";
import { Platform } from "react-native";

// import Internals
import { useChangeRd } from ".";

export default () => {
  // set Hooks
  const changeRd = useChangeRd();

  const Router = (goto) => {
    // console.log("useRouter", goto);

    if (Platform.OS === "web") window.history.pushState(null, "", `/${goto}`);

    changeRd({
      rdName: "rdRoute",
      rdPropName: "main",
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

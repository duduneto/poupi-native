// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
// import Internals
import { useChangeRd, useRd } from '.';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: IMPORTs
// ---------------

export default info => {
  // set Hooks
  let [sttValues, setValues] = React.useState({});
  let changeRd = useChangeRd();

  let rdName = useRd()[info];

  let inputChange = (iptName, value) => {
    !info
      ? setValues({ ...sttValues, [iptName]: value })
      : changeRd(info, { ...rdName, [iptName]: value });

    // console.log('sttValues', sttValues);
  };

  // return { inputChange, sttValues };
  return { inputChange };
};

// ---------------
// #endregion
// ***************************************

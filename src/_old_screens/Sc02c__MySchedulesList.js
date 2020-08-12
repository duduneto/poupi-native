// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
import { useRouter } from '../useMorfos';
import Sc02c from './Sc02c_v';

// ---------------
// #endregion
// ***************************************

export default function Fn02c() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc02c);
  let callRouter = useRouter();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const goTo = () => callRouter('itemProfile');

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    goTo,
    scContent,
    // toSignIn
  };

  return <Sc02c info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

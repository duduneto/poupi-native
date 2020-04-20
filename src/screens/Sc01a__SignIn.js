// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Sc01a from './Sc01a_v';
import {useRouter} from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
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

  // let model = () =>

  const enter = () => callRouter('itemsList');
  const goToTerms = () => callRouter('terms');
  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    enter,
    goToTerms,
    // scContent
    // toSignIn
  };

  return <Sc01a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

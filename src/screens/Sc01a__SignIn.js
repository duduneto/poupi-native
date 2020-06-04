// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
import Sc01a from './Sc01a_v';
import { useRouter, useCRUD } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Fn01a() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc01a);
  let callRouter = useRouter();
  let { callUpdate } = useCRUD();

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

  const signInGoogle = () => callUpdate('signInGoogle');
  const enter = () => callRouter('tempUser');
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
    scContent,
    signInGoogle,
    // toSignIn
  };

  return <Sc01a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

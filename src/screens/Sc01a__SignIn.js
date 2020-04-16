// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Sc01a from './Sc01a_v';
import {useDispatch} from 'react-redux';

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  // let { rdContent } = useRd();
  let dispatch = useDispatch();

  // let scContent = rdContent.sc00;

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

  // let toSignIn = () => history.push("/sign-in");
  const event = () => dispatch({type: 'setRoute', target: 'terms'});
  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    event,
    // scContent
    // toSignIn
  };

  return <Sc01a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

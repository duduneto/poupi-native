// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Sc03b from './Sc03b_v';
// import {useDispatch} from 'react-redux';

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  // let { rdContent } = useRd();
  //   let dispatch = useDispatch();

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

  //   const event = () => dispatch({type: 'setRoute', target: 'editor'});
  const event = () => {};

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

  return <Sc03b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

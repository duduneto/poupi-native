// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Cp01 from './Cp01_v';
// import {useDispatch} from 'react-redux';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
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

  const longBar = props.type === 'long';

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    children: props.children,
    longBar,
    event,
    // scContent
    // toSignIn
  };

  return <Cp01 info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

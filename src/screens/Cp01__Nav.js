// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import * as AllSc from './';
import { useHistory, useRd, useChangeRd, useStl } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdAuthUser } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // let redirect = rdAuthUser && history.push("/sign-in");
  let redirect = false;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let title = props.title;
  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  let condStl = props.type === 'long' ? useStl.longBar : useStl.shortBar;
  let toSignIn = () => history.push('/sign-in');
  // let model = () =>

  // let toSignIn = () => history.push("/sign-in");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    condStl,
    toSignIn,
    title
  };

  return redirect || <AllSc.Cp01_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

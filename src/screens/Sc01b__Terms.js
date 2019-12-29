// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import * as AllSc from './';
import { useHistory, useRd, useChangeRd } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
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

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  let toSignIn = () => history.push('/sign-in');

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    toSignIn
  };

  return redirect || <AllSc.Sc01b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

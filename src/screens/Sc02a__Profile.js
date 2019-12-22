// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import * as AllSc from './';
import { useHistory, useRd, useChangeRd } from './useMorfos';

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

  let redirect = !rdAuthUser && history.push('/sign-in');

  let userName = rdAuthUser.userName;
  let userEmail = rdAuthUser.email;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let setSignOut = () => {
    // call Hook
    changeRd('rdAuthUser', null);
    history.push('/sign-in');
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  let signOut = () => setSignOut();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    // BTNs
    rdContent,
    signOut,
    // USERDATA
    userName,
    userEmail
  };

  return redirect || <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

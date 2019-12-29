// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import * as AllSc from './';
import { useHistory, useRd, useChangeRd, UseFbListItems } from '../useMorfos';
import { NoItems, ListItem } from './Sc00b_v';

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

  // set List Call
  let infoUsers = {
    collection: 'users',
    reducerName: 'rdAllUsers',
    noItem: NoItems
  };

  // set Hook
  const [UsersList] = UseFbListItems(infoUsers);

  let callList = (
    <UsersList
      renderProps={({ item, idx }) => {
        console.log('item', item);

        let btnTempAuth = () => handleTempAuth(item);

        return ListItem({ idx, btnTempAuth, item });
      }}
    />
  );

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let handleTempAuth = item => {
    changeRd('rdAuthUser', item);

    history.push('list-shop');
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

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
    callList
    // toSignIn
  };

  return redirect || <AllSc.Sc00b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

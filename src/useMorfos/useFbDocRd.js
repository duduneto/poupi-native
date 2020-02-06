// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from "react";

// import Redux
import { useDispatch } from "react-redux";
// import { asyncCall } from "../../config/redux/asyncCall";
import { async } from "../config/redux/async";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function useFbDocRd() {
  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(async(res));

  // set Action
  const callListName = info => {
    // set Call
    let infoCall = {
      callName: "getDoc",
      rdName: info.rdName,
      par: {
        collection: info.collection,
        docId: info.docId
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callListName;
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // set Hooks
  const callDocRd = useFbDocRd();

  // set Call
  let infoUserId = {
    collection: 'users',
    docId: rdSelectedPost.userId,
    rdName: 'rdPostOwner' 
  };

  // function Call
  // callDocRd(infoUserId);

*/

// ---------------
// #endregion
// ***************************************

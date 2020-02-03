// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from 'react';

// import Redux
import { useDispatch } from "react-redux";
import { async } from "../config/redux/async";

// import Internals
import { useRd } from ".";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: IMPORTs
// ---------------

// Update an existing Doc
export default function useFbUpdateData() {
  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(async(res));

  // set reducer
  const dynamicRd = useRd();

  // set Action
  const callUpdateNameData = info => {
    // set Call
    let infoCall = {
      callName: "updateData",
      rdName: info.rdName,
      par: {
        collection: info.collection,
        docId: info.docId,
        dataToUpdate: info.dataToUpdate,
        dataToReducer: { ...dynamicRd[info.rdName], ...info.dataToUpdate }
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callUpdateNameData;
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*
   
  // set Hooks
  const callFbUpdateData = useFbUpdateData();

  // set Call
  let infoImgUser = {
    collection: 'users',
    rdName: 'rdAuthUser',
    docId: rdAuthUser.docId,
    dataToUpdate: { userImg: info, }
  };

  // function Call
  callFbUpdateData(infoImgUser)

  // ------ or ------
  
  // button Call
  // <TouchableOpacity 
  // onPress={() => callFbUpdateData(infoImgUser)}
  // > 
  // </ TouchableOpacity>
  
*/

// ---------------
// #endregion
// ***************************************

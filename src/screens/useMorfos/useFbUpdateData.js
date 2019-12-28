// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// import Internals
import { useReducer } from '.';

// ------------------------------
// #endregion

// Update an existing Doc
export default function useFbUpdateData() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set reducer
  const dynamicRd = useReducer();

  // set Action
  const callUpdateNameData = info => {
    // set Call
    let infoCall = {
      callName: 'updateData',
      reducerName: info.reducerName,
      par: {
        collection: info.collection,
        docId: info.docId,
        dataToUpdate: info.dataToUpdate,
        dataToReducer: { ...dynamicRd[info.reducerName], ...info.dataToUpdate }
      }
    };

    return callAsync(infoCall);
  };

  // send Result
  return callUpdateNameData;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****
   
 
 // #region [setLogic]
 // ------------------------------
 
 // Use Update Data
 // ------------------------------
 
    // set Hooks
    const callFbUpdateData = useFbUpdateData();

    // set Call
    let infoImgUser = {
      collection: 'users',
      reducerName: 'rdAuthUser',
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
    
  // ------------------------------
  // #endregion
  
*/

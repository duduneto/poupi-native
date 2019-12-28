// #region [setImports]
// ------------------------------

// import Packages
import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { asyncCall } from '../../config/redux/asyncCall';

// ------------------------------
// #endregion

export default function useFbAddData() {
  // #region [useMorfos]
  // ------------------------------

  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(asyncCall(res));

  // set Action
  const callAddName = info => {
    // set Call
    let infoCall = {
      callName: 'addData',
      reducerName: info.reducerName,
      par: {
        collection: info.collection,
        dataToAdd: info.dataToAdd
      }
    };

    return callAsync(infoCall);
  };

  return callAddName;

  // ------------------------------
  // #endregion
}

/*** HOW TO USE IT ****
 
 // #region [setLogic]
 // ------------------------------
 
 // --- Use Add Data
 // ------------------------------
 
   // set Hooks
   const callAdd = useFbAddData();

    // set Call
    let infoAddPost = {
      collection: 'posts',
      reducerName: 'rdPostDocId',
      dataToAdd: {
          createdAt: new Date(),
          userId: rdAuthUser.docId,
          title: rdTitlePost,
          description: rdDescriptionPost
      }
    };
    
    // function Call
    // callAdd(infoAddPost)

    // ------ or ------

    // button Call
    // <TouchableOpacity onPress={() => callAdd(infoAddPost)}> 
    // </ TouchableOpacity>

  // ------------------------------
  // #endregion

*/

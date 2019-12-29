// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from 'react';

// import Redux
import { useDispatch } from 'react-redux';
import { async } from '../config/redux/async';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function useFbAddData() {
  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(async(res));

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
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*
 
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

*/

// ---------------
// #endregion
// ***************************************

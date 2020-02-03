// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from 'react';

// import Redux
import { useDispatch } from "react-redux";
import { async } from "../config/redux/async";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function useFbListRd() {
  // set Redux
  const dispatch = useDispatch();
  const callAsync = res => dispatch(async(res));

  // set Action
  const callListName = info => {
    // set Call
    let setFirestoreList = {
      collection: info.collection,
      where1: info.where1,
      where2: info.where2,
      order1: info.order1,
      order2: info.order2,
      merge1: info.merge1,
      merge2: info.merge2
    };
    let infoCall = {
      callName: "getList",
      rdName: info.rdName,
      par: setFirestoreList
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
  const callListRd = useFbListRd();

  // set Call
  let infoRates = {
    collection: 'rates',
    rdName: 'rdListUserRates',
    // filter
    where1: { field: 'rattingUserId', type: '==', value: rdAuthUser.docId },
    // order
    order1: { field: 'createdAt', type: 'desc' },
    // merges
    // fromId: wich field from original collection show the id to Merge
    merge1: { collection: 'users', fromId: 'userId' }, 
    merge2: { collection: 'promotions', fromId: 'promotionId' },
  };

  // function Call
  // callListRd(infoRates);
        
  // ------ or ------

  // button Call
  // <TouchableOpacity 
  // onPress={() => callListRd(infoRatesList)}
  // > 
  // </TouchableOpacity>

*/

// ---------------
// #endregion
// ***************************************

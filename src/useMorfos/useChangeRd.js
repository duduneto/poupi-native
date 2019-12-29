// ***************************************
// #region :: IMPORTs
// ---------------

// import packages
import { useDispatch } from 'react-redux';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function useChangeRd() {
  let dispatch = useDispatch();

  let callRd = (info1, info2) => {
    return { type: 'CHANGE_REDUCER', rdName: info1, value: info2 };
  };

  return (res1, res2) => dispatch(callRd(res1, res2));
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*
  
 // set Hooks
 let changeRd = useChangeRd();
 
 // call Hook
 // changeRd("rdContent", dbRef)

 */

// ---------------
// #endregion
// ***************************************

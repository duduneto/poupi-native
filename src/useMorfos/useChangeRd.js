// import Packages
// import React from 'react';
import { useDispatch } from "react-redux";

export default function useChangeRd() {
  const dispatch = useDispatch();

  function callRd(info) {
    let callAction = { type: "CHANGE_REDUCER", ...info };
    if (info.rdArrValue) callAction = { type: "CHANGE_RD_ARR", ...info };
    if (info.rdIdx) callAction = { type: "CHANGE_RD_IDX", ...info };
    if (info.rdPropName) callAction = { type: "CHANGE_RD_PROP", ...info };
    if (info.stlProp) callAction = { type: "CHANGE_STL_PROP", ...info };
    if (info.clearAll) callAction = { type: "CLEAR_ALL", ...info };

    return callAction;
  }

  const changeRd = (res) => dispatch(callRd(res));

  return changeRd;
}

// How it works
/*
  import {useChangeRd} from "./useMorfos";

  export default () => {
    //set Hooks
    let changeRd = useChangeRd();

    //set Call
    let infoCall = {rdName: '', value: ''}

    //call Hook
    changeRd(infoCall)
  }
*/

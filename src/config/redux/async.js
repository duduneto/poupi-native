// import Packages
import { takeEvery, call, put } from "redux-saga/effects";

export function async(info) {
  // console.log('data', data);

  return {
    type: "ASYNC_BEGIN",
    info,
    rdName: info.rdName,
    callName: info.callName
  };
}

export function dismissAsyncError() {
  return {
    type: "ASYNC_DISMISS_ERROR"
  };
}

export function* doAsync(infoCall) {
  // console.log(infoCall)

  let res;
  let firebaseCall = require("../firebase/firestore");
  let fbCallName = infoCall.info.callName;
  let fbCall = firebaseCall[fbCallName];
  let par = infoCall.info.par;

  try {
    res = yield call(fbCall, par);
  } catch (err) {
    yield put({
      type: "ASYNC_FAILURE",
      data: { error: err }
    });

    return;
  }

  yield put({
    type: "ASYNC_SUCCESS",
    data: res,
    rdName: infoCall.info.rdName,
    callName: fbCallName
  });
}

/*
 takeEvery }} vs }} takeLatest
*/

export default function* rootSaga() {
  yield takeEvery("ASYNC_BEGIN", doAsync);
}

// Redux reducer
export function reducer(state, action) {
  // console.log(action)
  let name = action.rdName;
  let data = action.data;
  let asyncPending = action.callName + "Pending";
  let asyncError = action.callName + "Error";

  switch (action.type) {
    case "ASYNC_BEGIN":
      return {
        ...state,
        [asyncPending]: true,
        [asyncError]: null
      };

    case "ASYNC_SUCCESS":
      return {
        ...state,

        [name]: data,

        [asyncPending]: false,
        [asyncError]: null
      };

    case "ASYNC_FAILURE":
      return {
        ...state,
        [asyncPending]: false,
        [asyncError]: action.data.error
      };

    case "ASYNC_DISMISS_ERROR":
      return {
        ...state,
        [asyncError]: null
      };

    default:
      return state;
  }
}

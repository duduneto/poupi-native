// import Packages
import { takeEvery, call, put } from 'redux-saga/effects';

export function asyncCall(info) {
  // console.log('data', data);

  return {
    type: 'ASYNC_BEGIN',
    info,
    reducerName: info.reducerName,
    callName: info.callName
  };
}

export function dismissAsyncCallError() {
  return {
    type: 'ASYNC_DISMISS_ERROR'
  };
}

export function* doAsyncCall(infoCall) {
  // console.log(infoCall)

  let res;
  let firebaseCall = require('../firebase');
  let fbCallName = infoCall.info.callName;
  let fbCall = firebaseCall[fbCallName];
  let par = infoCall.info.par;

  try {
    res = yield call(fbCall, par);
  } catch (err) {
    yield put({
      type: 'ASYNC_FAILURE',
      data: { error: err }
    });

    return;
  }

  yield put({
    type: 'ASYNC_SUCCESS',
    data: res,
    reducerName: infoCall.info.reducerName,
    callName: fbCallName
  });
}

/*
 takeEvery }} vs }} takeLatest
*/

export default function* rootSaga() {
  yield takeEvery('ASYNC_BEGIN', doAsyncCall);
}

// Redux reducer
export function reducer(state, action) {
  // console.log(action)
  let name = action.reducerName;
  let data = action.data;
  let asyncCallPending = action.callName + 'Pending';
  let asyncCallError = action.callName + 'Error';

  switch (action.type) {
    case 'ASYNC_BEGIN':
      return {
        ...state,
        [asyncCallPending]: true,
        [asyncCallError]: null
      };

    case 'ASYNC_SUCCESS':
      return {
        ...state,

        [name]: data,

        [asyncCallPending]: false,
        [asyncCallError]: null
      };

    case 'ASYNC_FAILURE':
      return {
        ...state,
        [asyncCallPending]: false,
        [asyncCallError]: action.data.error
      };

    case 'ASYNC_DISMISS_ERROR':
      return {
        ...state,
        [asyncCallError]: null
      };

    default:
      return state;
  }
}

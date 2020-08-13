import filesPath from './screens';
import { utils } from '../useMorfos';

const { toArr } = utils;

export default (state, action, arr = toArr(filesPath)) => {
  let newObj = {};
  arr.map(
    item =>
      (newObj = {
        ...newObj,
        ...require(`./screens/${item}/reducers`).default(state, action),
      }),
  );
  return newObj;
};

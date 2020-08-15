import screens from '../../../project/screens/';

export default (state, action) => {
  let loopObj = {};
  // const refScs = '../../project/screens';

  for (const key in screens) {
    const item = screens[key];
    loopObj = {
      ...loopObj,
      ...require(`../../../project/screens/${item}/reducers`).default(
        state,
        action,
      ),
    };
  }
  return loopObj;
};

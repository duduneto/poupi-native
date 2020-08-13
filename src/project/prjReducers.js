const filesPath = [
  './screens/A0_AllApp',
  './screens/A0b_TempUsers',
  './screens/A1_Signin',
  './screens/A2_Terms',
  './screens/X_Example',
];

export default (state, action, arr = filesPath) => {
  let newObj = {};
  arr.map(
    item =>
      (newObj = {
        ...newObj,
        ...require(`${item}/reducers`).default(state, action),
      }),
  );
  return newObj;
};

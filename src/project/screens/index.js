export default {
  // A0: require('A0_AllApp'),
  A0b: require('./A0b_TempUsers'),
  A1: require('./A1_Signin'),
  A2: require('./A2_Terms'),

  B1: require('./B1_MktLIST'),
  C1: require('./C1_MktADD'),

  X: require('./X_Example'),
  // B0: require('./B0_NameLIST'),
  // C0: require('./C0_NamePF'),
  404: require('./X_404'),
};
export const reducers = {
  // A0: require('A0_AllApp'),
  A0b: require('./A0b_TempUsers/reducers'),
  A1: require('./A1_Signin/reducers'),
  A2: require('./A2_Terms/reducers'),

  B1: require('./B1_MktLIST/reducers'),
  C1: require('./C1_MktADD/reducers'),

  X: require('./X_Example/reducers'),
  // B0: require('./B0_NameLIST/reducers'),
  // C0: require('./C0_NamePF/reducers'),
  404: require('./X_404/reducers'),
};

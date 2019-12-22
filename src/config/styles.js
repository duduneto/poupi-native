import { StyleSheet } from 'react-native';

// ***************************************
// #region :: COLORS
// ---------------

const primaryColor = '#ff0000';
const secondaryColor = '#000';
const tertiaryColor = '#ff5300'; //laranja
const inverseColor = '#eee';
const lightGray = '#f6f6f6';
const mediumGray = '#ebebeb';
const gray = '#888';

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: SIZES / MARGINS / POSITIONS
// ---------------

const posRelative = {
  position: 'relative'
};

// ***************************************
// #region :: PADDINGS + MARGINS
// ---------------

const pad10 = {
  padding: 10
};
const pad20 = {
  padding: 20
};
const noMg = {
  margin: 0
};
const mgB20 = {
  marginBottom: 20
};
const mgL5 = {
  marginLeft: 5
};

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: TEXT + FONTS
// ---------------

const txBase = {
  fontSize: 16
};
const txTitleCard = {
  fontSize: 17,
  color: gray
};
const txSubTitleCard = {
  fontSize: 14,
  color: gray
};
const txTitleProfile = {
  fontSize: 16,
  fontWeight: 'bold',
  color: primaryColor
};
const txTitleScreen = {
  color: inverseColor,
  fontSize: 20
};

const txCenter = {
  textAlign: 'center'
};

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: FLEXBOX
// ---------------

const flexRow = {
  flexDirection: 'row',
  alignItems: 'center'
};

const flexCenter = {
  alignItems: 'center',
  justifyContent: 'center'
};

const flexBetween = {
  alignItems: 'center',
  justifyContent: 'space-between'
};

const flexStart = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start'
};
const flexEnd = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-end'
};

const flexWrap = {
  flexWrap: 'wrap'
};

const flex1 = {
  flex: 1
};
const flex2 = {
  flex: 2
};
const flex3 = {
  flex: 3
};
const flex4 = {
  flex: 4
};

// ---------------
//  #endregion
// ***************************************

// ***************************************
// #region :: STYLES + FX ****************
// ---------------

const shadowLess = {
  // web shadow
  shadowColor: '#000',
  shadowOpacity: 0.3,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 1 },
  // android shadow
  elevation: 4
};
const shadowMore = {
  // web shadow
  shadowColor: '#000',
  shadowOpacity: 0.4,
  shadowRadius: 14,
  shadowOffset: { width: 3, height: 6 },
  // android shadow
  elevation: 14
};
const radiusLess = {
  borderRadius: 8
};
const radiusMore = {
  borderRadius: 14
};
const radiusTotal = {
  borderRadius: 100
};
const btn = {
  ...shadowLess,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center'
};

const topLine = {
  borderTopColor: '#e6e6e6',
  borderTopWidth: 1
};
const bottomLine = {
  borderBottomColor: '#e6e6e6',
  borderBottomWidth: 1
};
const dot = {
  width: 8,
  height: 8,
  ...radiusTotal,
  marginRight: 5
};
const active = {
  color: primaryColor,
  backgroundColor: primaryColor
};
const noact = {
  color: 'white',
  backgroundColor: 'white'
};
const noactGr = {
  color: mediumGray,
  backgroundColor: mediumGray
};

// ---------------
//  #endregion
// ***************************************

// ---------------
//  #endregion
// ***************************************

const Styles = StyleSheet.create({
  // ***************************************
  // #region :: OBJs
  // ---------------

  posRelative,
  dot,
  active,
  noact,
  noactGr,
  btn,
  flex1,
  flex2,
  flex3,
  flex4,
  pad10,
  pad20,
  noMg,
  mgB20,
  mgL5,
  txBase,
  flexRow,
  flexStart,
  flexCenter,
  flexBetween,
  flexEnd,
  txTitleCard,
  txSubTitleCard,
  radiusLess,
  radiusMore,
  radiusTotal,
  txTitleScreen,
  txTitleProfile,
  flexWrap,
  txCenter,
  topLine,
  bottomLine,
  shadowLess,
  shadowMore,

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: MAIN
  // ---------------

  flexMaster: {
    flex: 1,
    overflow: 'hidden'
  },

  leftBox: {
    flex: 1,
    ...flexCenter,
    height: 50
  },

  centerBox: {
    flex: 8,
    ...flexCenter,
    height: 50
  },

  rightBox: {
    flex: 1,
    ...flexCenter,
    height: 50
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: NAVs
  // ---------------

  navbarView: {
    backgroundColor: primaryColor,
    zIndex: 5,
    height: 60,
    ...flexRow,
    ...flexBetween,
    ...shadowMore
  },

  shortBar: {
    backgroundColor: primaryColor,
    position: 'absolute',
    width: '100%',
    height: 50,
    left: 0,
    top: 0
  },

  longBar: {
    backgroundColor: primaryColor,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 120,
    ...flexRow,
    ...flexBetween
  },

  searchBar: {
    backgroundColor: lightGray,
    height: 60,
    ...flexRow,
    ...flexBetween
    // ...shadowMore
  },

  titlePageLeft: {
    width: '100%',
    ...txTitleScreen,
    textAlign: 'left',
    marginLeft: 10
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: CARDS
  // ---------------

  card: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusLess,
    ...shadowLess,
    ...pad20
  },

  cardMask: {
    backgroundColor: 'white',
    marginBottom: 20,
    overflow: 'hidden',
    ...radiusLess,
    ...shadowLess
  },

  cardList: {
    backgroundColor: 'white',
    marginBottom: 20,
    ...radiusLess,
    ...shadowLess,
    padding: 10
  },

  dialogueBox: {
    marginBottom: 20,
    backgroundColor: 'white',
    overflow: 'hidden',
    ...shadowMore
  },

  colView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...flex1
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: IMAGES
  // ---------------

  thumbnail: {
    width: 100,
    height: 65,
    marginRight: 10
  },
  imgProfile: {
    width: '100%',
    height: 220
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: BTNs
  // ---------------

  btnPrimary: {
    backgroundColor: primaryColor,
    ...btn
  },

  txInverseColor: {
    color: inverseColor,
    ...txBase
  },

  bgInverseColor: {
    backgroundColor: inverseColor
  },

  // BTN SECONDARY
  btnSecondary: {
    backgroundColor: secondaryColor,
    ...btn
  },

  txBtnSecondary: {
    ...txBase,
    ...btn
  },

  // BTN TERTIARY
  btnTertiary: {
    backgroundColor: tertiaryColor,
    ...btn
  },
  txBtnTertiary: {
    ...txBase,
    ...btn
  },

  // FAB BUTTON
  btnFab: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    ...flexCenter,
    ...radiusTotal,
    ...shadowMore
  },

  btnFabSmall: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    ...flexCenter,
    ...radiusTotal,
    ...shadowMore
  },

  // BTN SIZES
  btnXSmall: {
    // paddingHorizontal: 8,
    // paddingVertical: 2
    width: 60,
    height: 20
  },

  btnSmall: {
    // paddingHorizontal: 10,
    // paddingVertical: 6
    width: 100,
    height: 30
  },

  btnMedium: {
    // paddingHorizontal: 20,
    // paddingVertical: 10
    width: 150,
    height: 40
  },

  btnLarge: {
    // paddingHorizontal: 70,
    // paddingVertical: 14
    width: 200,
    height: 50
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: INPUTs
  // ---------------

  input: {
    borderWidth: 2,
    ...radiusLess,
    borderColor: mediumGray,
    paddingHorizontal: 14,
    paddingVertical: 8
  },

  textArea: {
    textAlignVertical: 'top'
  },

  picker: {
    borderWidth: 2,
    margin: 0,
    padding: 0,
    ...radiusLess,
    borderColor: mediumGray
  },

  line: {
    backgroundColor: mediumGray,
    marginLeft: 5,
    height: 1,
    flex: 1
  },

  itemList: {
    ...flexRow,
    ...flexBetween,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },

  itemAccordion: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },

  badge: {
    borderWidth: 1,
    ...radiusLess,
    borderColor: '#ccc',
    backgroundColor: lightGray
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: FOOTER
  // ---------------

  tabFooter: {
    ...flexRow,
    ...flexBetween,
    backgroundColor: lightGray,
    paddingHorizontal: 20,
    height: 60
  },

  iconCenter: {
    ...flexCenter,
    flex: 1
  },

  dotNotice: {
    backgroundColor: primaryColor,
    borderColor: lightGray,
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 2,
    ...flexCenter,
    color: '#fff',
    fontSize: 11,
    ...txCenter,
    height: 19,
    zIndex: 10,
    right: -5,
    width: 20,
    top: 5
  },

  // ---------------
  //  #endregion
  // ***************************************

  // ***************************************
  // #region :: ??? REVISAR
  // ---------------

  logo: {
    width: 280,
    height: 50,
    marginBottom: 10
  },

  brandBox: {
    flex: 3,
    ...flexCenter
  },

  logoBar: {
    width: 160,
    height: 30
  }

  // ---------------
  //  #endregion
  // ***************************************
});

export default Styles;

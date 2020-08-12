// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import Internals
import { useStl, UseIcoMoon } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------
let stlBODY1a = [useStl.card, useStl.cardProfile];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.profileImg];
let stlBODY1d = [useStl.pad20, useStl.flexCenter, useStl.topLine];
let stlBODY1f = [useStl.pad20];
let stlBODY1g = [useStl.flexRow, { height: 60, flex: 6 }];
let stlBODY1h = [useStl.card];
let stlBODY1i = [
  useStl.flexRow,
  {
    height: 60,
    flex: 6,
    width: 120,
    justifyContent: 'space-between',
  },
];
let stlBODY2 = [useStl.txtTitleCard];
let stlBODY2b = [useStl.mgB20, useStl.txtBase, useStl.txtCenter];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY2f = [{ fontSize: 16, textAlign: 'center', color: '#3f3f3f' }];
let stlBODY2g = [{ fontSize: 12, textAlign: 'center', color: '#a5a5a5' }];

let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];
let stlBODY3b = [useStl.flexRow, useStl.flexBetween];
let stlBODY3c = [{ flex: 8, flexDirection: 'column' }];

let mgRightEditBtn = [useStl.flexEnd, { flex: 1 }];
let scheduleTimePadding = [{ paddingVertical: 10 }];
let infoProfileContainer = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItens: 'start',
};

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
export const ScheduledItem = ({ info, goTo, toEdit }) => (
  <TouchableOpacity style={scheduleTimePadding} onPress={goTo}>
    <View style={stlBODY3b}>
      <View style={stlBODY3c}>
        <View style={stlBODY1g}>
          <Text style={stlBODY2f}>{info.thisWeekDay}</Text>
        </View>
        <View style={stlBODY1i}>
          <Text style={stlBODY2g}>{info.scheduleDate}</Text>
          <Text style={stlBODY2g}>{info.scheduleTime}</Text>
        </View>
      </View>
      {info.isAdm && (
        <TouchableOpacity style={mgRightEditBtn} onPress={toEdit}>
          <UseIcoMoon name="edit" size={18} color="#9f9f9f" />
        </TouchableOpacity>
      )}
    </View>
  </TouchableOpacity>
);

export const DeleteAccountBtn = ({ onPress, title }) => (
  <TouchableOpacity style={stlBODY3} onPress={onPress}>
    <Text style={stlBODY2c}>{title}</Text>
  </TouchableOpacity>
);

export const EmptyMsg = ({ title }) => <Text>{title}</Text>;

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stlBODY1f}>
    <View style={stlBODY1a}>
      <View style={stlBODY1b}>
        <Image source={info.condThumbnail} style={stlBODY1c} />
        <View style={infoProfileContainer}>
          <View />
          <View>
            <Text style={stlBODY2}>{info.userName}</Text>
            <Text style={stlBODY2b}>{info.email}</Text>
          </View>
          {info.isAdm ? (
            <TouchableOpacity onPress={info.toEdit}>
              <UseIcoMoon name="edit" size={18} color="#b5b5b5" />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>

      {/* <View style={stlBODY1d}>{info.deleteAccountBtn}</View> */}
    </View>

    <View style={stlBODY1h}>
      {/* LIST */}
      {/* ------------------------------ */}

      {info.listSchedule}

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

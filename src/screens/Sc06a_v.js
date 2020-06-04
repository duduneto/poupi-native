// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import Internals
import src1 from '../images/schedule.png';
import { useStl, UseIcoMoon, UseLoader } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------
let stlBODY1 = [useStl.pad20];
let stlBODY1a = [{ marginTop: -120, minHeight: 10 }];
// let stlBODY1b = [useStl.flexCenter];
let stlBODY1c = [useStl.card];
let stlBODY1e = [useStl.card];
let stlBODY1g = [useStl.flexRow, { height: 40, flex: 1, marginBottom: 8 }];
let stlBODY1j = [{ width: 75, height: 75 }];
let stlBODY1h = [
  useStl.flexRow,
  { marginBottom: 0, justifyContent: 'space-around' },
];
let stlBODY1i = [useStl.card, stlBODY1h];

let stlBODY2 = [
  useStl.txtTitleCard,
  { marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
];
let stlBODY2f = [{ fontSize: 14, color: '#444', paddingLeft: 10 }];

let stlBODY3c = [
  useStl.flexRow,
  { backgroundColor: '#eee', padding: 10, borderRadius: 4 },
];
let stlBODY3d = [{ marginTop: 40 }];

let stlUrlTitle = { color: '#666', fontSize: 14 };
let stlUrl = { color: '#333', fontSize: 14, paddingLeft: 5 };

let subscribeBtnTitle = { color: '#eee', fontSize: 14 };
let subscribeBtn = [useStl.btn, useStl.btnMedium, { backgroundColor: '#333' }];

let unsubscribeBtnTitle = { color: '#eee', fontSize: 14 };
let stlSubscribeBtn = [
  useStl.btn,
  useStl.btnMedium,
  { backgroundColor: '#333' },
];

let unsubscribeBtnTitleDisable = { color: '#999', fontSize: 14 };
let stlSubscribeDisableBtn = [
  useStl.btn,
  useStl.btnMedium,
  { backgroundColor: '#6f6f6f' },
];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item

export const ScheduledItem = ({ info }) => (
  <TouchableOpacity>
    <View style={stlBODY1g}>
      <UseIcoMoon name="user" size={18} color="#c3c3c3" />
      <Text style={stlBODY2f}>{info.userName}</Text>
    </View>
    {info.isAdm && (
      <TouchableOpacity>
        <UseIcoMoon name="edit" size={18} color="#9f9f9f" />
      </TouchableOpacity>
    )}
  </TouchableOpacity>
);

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stlBODY1}>
    <View style={stlBODY1a}>
      {info.checkCompatibleSubscribedClassTime ? (
        <View>
          <Text>{info.scContent.incompatibleTimeClass}</Text>
        </View>
      ) : info.subscribeUserPending ? (
        <UseLoader size="large" color="#fff" />
      ) : info.hasRdAuthUserIdOnSubscribeList ? (
        <View style={stlBODY1c}>
          <View style={stlBODY1h}>
            <Image source={src1} style={stlBODY1j} />
            <TouchableOpacity
              style={
                info.overTimeDisabledBtn
                  ? stlSubscribeDisableBtn
                  : stlSubscribeBtn
              }
              onPress={info.unsubscribeUser}
              disabled={info.overTimeDisabledBtn}
            >
              <Text
                style={
                  info.overTimeDisabledBtn
                    ? unsubscribeBtnTitleDisable
                    : unsubscribeBtnTitle
                }
              >
                {info.scContent.cancelSubscribeBtn}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={stlBODY3c} onPress={info.openLink}>
            <Text style={stlUrlTitle}>Alguns momentos antes da aula:</Text>
            <Text style={stlUrl}>{info.url}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={stlBODY1i}>
            <Image source={src1} style={stlBODY1j} />
            <TouchableOpacity style={subscribeBtn} onPress={info.subscribeUser}>
              <Text style={subscribeBtnTitle}>
                {info.scContent.subscribeMsg}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>

    <View style={stlBODY3d}>
      {/* LIST */}
      {/* ------------------------------ */}

      <View style={stlBODY1e}>
        <Text style={stlBODY2}>Participantes</Text>
        {info.listSubscribedStudents}
      </View>

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

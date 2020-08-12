// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

// import Internals
import Cp01 from './components/Cp01__Nav';
import errorImg from '../images/error.png';
import { useStl, UseIcoMoon, UseLoader } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let listContainer = [useStl.card, { marginTop: -130, minHeight: 200 }];
let stlBODY1b = [useStl.flexCenter, useStl.flex1];
let stlIMG1 = [{ width: 100, height: 100 }];
let stlBODY1f = [useStl.pad20];
let stlBODY1g = [useStl.flexRow];
let stlBODY1i = [useStl.flexRow, useStl.flexBetween];

let stlBODY2f = [{ fontSize: 16, textAlign: 'center', color: '#3f3f3f' }];
let stlBODY2g = [{ fontSize: 12, textAlign: 'center', color: '#a5a5a5' }];

let stlBODY3b = [useStl.mgB20];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
// export const itemList = (item) => (<View>{item}</View>)

export const ScheduledItem = ({ info }) => (
  <TouchableOpacity disabled={true} style={stlBODY3b}>
    <View>
      <View style={stlBODY1g}>
        <Text style={stlBODY2f}>{info.thisWeekDay}</Text>
      </View>
      <View style={stlBODY1i}>
        <Text style={stlBODY2g}>{info.scheduleDate}</Text>
        <Text style={stlBODY2g}>{info.scheduleTime}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export const EmptyMsg = ({ title }) => (
  <View style={stlBODY1b}>
    <Image source={errorImg} style={stlIMG1} />
    <Text style={stlBODY2f}>{title}</Text>
  </View>
);

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <View style={stlBODY1f}>
    <View style={listContainer}>
      {/* LIST */}
      {/* ------------------------------ */}

      {info.setUserSubscribedClassesPending ? (
        <View style={stlBODY1b}>
          <UseLoader size="large" />
        </View>
      ) : (
        info.listSchedule
      )}

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </View>

  // ---------------
  // #endregion
  // ***************************************
);

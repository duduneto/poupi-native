// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

// import Internals
import {useStl} from '../useMorfos';
import defaultImg from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1 = [useStl.colView];
let stlBODY1a = [
  useStl.cardMask,
  useStl.mgB20,
  {minWidth: 120, flex: 1, marginHorizontal: 8},
];
let stlBODY1b = [{margin: 8}];
let stlBODY1c = [useStl.flex1];

let stlBODY2 = [
  {fontSize: 12, textAlign: 'center', marginTop: 8, marginBottom: 3},
];
let stlBODY2c = [useStl.txtSmall, useStl.flex2, useStl.mgL5];

let stlBODY3 = [useStl.thumbnailCateg];
let stlBODY3a = [useStl.flexRow, useStl.flexBetween];

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
// export const itemList = (item) => (<View>{item}</View>)

// ---------------
// #endregion
// ***************************************

export default ({info}) => (
  // ***************************************
  // #region :: RENDER
  // ---------------
  <View style={stlBODY1}>
    {/* LIST */}
    {/* ------------------------------ */}

    {/* {info.listCateg} */}

    <TouchableOpacity style={stlBODY1a} onPress={info.goTo}>
      <View style={stlBODY1b}>
        <Image source={defaultImg} style={stlBODY3} />
        <View style={stlBODY1c}>
          <Text style={stlBODY2}>Nome</Text>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={stlBODY1a} onPress={info.goTo}>
      <View style={stlBODY1b}>
        <Image source={defaultImg} style={stlBODY3} />
        <View style={stlBODY1c}>
          <Text style={stlBODY2}>Nome</Text>
        </View>
      </View>
    </TouchableOpacity>

    {/* END */}
    {/* ------------------------------ */}
  </View>
  // ---------------
  // #endregion
  // ***************************************
);

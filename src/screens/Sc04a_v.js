// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

// import Internals
import Cp01 from './components/Cp01__Nav';
import {useStl, UseIcoMoon} from '../useMorfos';
import defaultImg from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.card, useStl.cardLongBar];
let stlBODY1b = [useStl.flexCenter];
let stlBODY1d = [
  useStl.mgB20,
  {
    borderWidth: 2,
    borderColor: '#eee',
    minHeight: 100,
    borderRadius: 16,
  },
];
let stlBODY2 = [useStl.input, useStl.mgB20];
let stlBODY2c = [useStl.txtPrimaryInverse];
let stlBODY3 = [
  useStl.btn,
  useStl.btnLarge,
  useStl.btnPrimary,
  {marginBottom: 10},
];
let stlBODY3a = [useStl.btn, useStl.btnLarge];
let stlBODY3b = [useStl.btn, useStl.btnXSmall, {width: 100, margin: 10}];
let stlBODY3c = [
  {
    fontSize: 11,
    color: '#999',
    position: 'absolute',
    top: 3,
    zIndex: 2,
  },
];
let stlUpload = {
  bt: stlBODY3b,
  txt: stlBODY3c,
};
let stlBODY4 = [useStl.msgError];

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

  <Cp01 type="long">
    <View style={useStl.pad20}>
      {/* BODY */}
      {/* ------------------------------ */}

      <View style={stlBODY1a}>
        {/* FIELDs */}
        {/* ------------------------------ */}
        {/* {info.arrIpts.map((item, idx) => ( */}
        {/* <React.Fragment key={idx}> */}
        <React.Fragment>
          {/* {item.imgPicker && (
              <View style={stlBODY1d}>
                <info.UseImgPicker
                  onChange={item.setOnChange}
                  changeRd={info.changeRd}
                  stl={stlUpload}
                />
              </View>
            )} */}
          {/* {!item.imgPicker && ( */}
          <TextInput
            style={stlBODY2}
            placeholder={'item.pHolder'}
            // onChangeText={item.setOnChange}
            // multiline={item.multi}
            // numberOfLines={item.lines}
          />
          {/* )} */}
        </React.Fragment>
        {/* ))} */}

        {/* BUTTONs */}
        {/* ------------------------------ */}
        {/* Require Msg */}

        <Text style={stlBODY4}>reqMsg</Text>

        <View style={stlBODY1b}>
          <TouchableOpacity style={stlBODY3} onPress={info.saveDataProd}>
            <Text style={stlBODY2c}>save</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stlBODY3a} onPress={info.cancel}>
            <Text>cancel</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* END */}
      {/* ------------------------------ */}
    </View>
  </Cp01>

  // ---------------
  // #endregion
  // ***************************************
);

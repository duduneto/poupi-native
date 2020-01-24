// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import Internals
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBODY1a = [useStl.cardMask, useStl.mgB20];
let stlBODY1b = [useStl.flexRow, useStl.flexBetween, { margin: 8 }];
let stlBODY1c = [useStl.flex1];
let stlBODY2 = [useStl.txtSubTitleCard];
let stlBODY2b = [useStl.txtBase];
// let stlBODY2c = [useStl.txtSmall];
// let stlBODY2d = [{ paddingBottom: 8 }];
let stlBODY3 = [useStl.thumbnail];

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <>
      {/* LIST */}
      {/* ------------------------------ */}

      <TouchableOpacity style={stlBODY1a} onPress={info.goToProfileStore}>
        <View style={stlBODY1b}>
          <Image source={info.thumbnail} style={stlBODY3} />
          <View style={stlBODY1c}>
            <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
            <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* END */}
      {/* ------------------------------ */}
    </>
    // ---------------
    // #endregion
    // ***************************************
  );
};

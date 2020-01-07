// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

// import Internals
import { Cp01 } from "../components";
import { useStl } from "../../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------


let stlBODY1 = [useStl.flex1];
let stlBODY2 = [useStl.txtTitleCard];
// let stlBODY2b = [useStl.mgB20, useStl.txtBase];
// let stlBODY2c = [useStl.txtPrimaryInverse];
// let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

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

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <Cp01 title="Page Name">

      {/* PART 1 */}
      {/* ------------------------------ */}

      <Text style={stlBODY2}>Part 1</Text>

      {/* PART 2 */}
      {/* ------------------------------ */}

      <Text style={stlBODY2}>Part 2</Text>

      {/* PART 3 */}
      {/* ------------------------------ */}

      <Text style={stlBODY2}>Part 3</Text>

      <TouchableOpacity onPress={info.event}>
        <Text style={stlBODY2}>CLICK HERE!</Text>
      </TouchableOpacity>

      {/* END */}
      {/* ------------------------------ */}
  </Cp01>

  // ---------------
  // #endregion
  // ***************************************
);

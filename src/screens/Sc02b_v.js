// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import Internals
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stlBODY1a = [useStl.card, useStl.flex1];
  let stlBODY2 = [useStl.txtSubTitleCard];
  let stlBODY2b = [useStl.txtBase];
  // let stlBODY2b = [useStl.mgB20, useStl.txtBase];
  // let stlBODY2c = [useStl.txtPrimaryInverse];
  // let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    // {/* LIST */}
    // {/* ------------------------------ */}

    <TouchableOpacity style={stlBODY1a} onPress={info.goToProfileProd}>
      <Text style={stlBODY2}>Celular Samsung J7 Prime</Text>
      <Text style={stlBODY2b}>Descrição curta do item bla bla a...</Text>
    </TouchableOpacity>

    // {/* END */}
    // {/* ------------------------------ */}

    // ---------------
    // #endregion
    // ***************************************
  );
};

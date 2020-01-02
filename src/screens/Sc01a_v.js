// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import Internals
import { useStl, UseIcoMoon } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default ({ info }) => {
  // ***************************************
  // #region :: STYLEs
  // ---------------

  let stl01 = [useStl.flex1, useStl.bgPrimary];
  let stl01a = [useStl.flexCenter, useStl.flex3];
  let stl01b = [useStl.flexBetween, useStl.flex1, { paddingVertical: 30 }];
  let stl01c = [useStl.flexCenter];
  let stl02 = [useStl.btn, useStl.btnLarge, useStl.bgSecondary];
  let stl02a = [useStl.txtPrimaryInverse];
  let stl03 = [useStl.flexCenter, { marginBottom: 50 }];
  let stl04 = [{ fontSize: 14, color: "#999", marginTop: 20 }];
  let stl04b = [
    useStl.txtBase,
    { color: "#999", marginBottom: 10, textAlign: "center" }
  ];
  // let stl05 = []

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stl01}>
      {/* LOGO */}
      {/* ------------------------------ */}

      <View style={stl01a}>
        <View style={stl03}>
          <UseIcoMoon name="image" size={62} color={"#ccc"} />

          <Text style={stl04}>TEXTO SLOGAN</Text>
        </View>
      </View>

      {/* BTNs */}
      {/* ------------------------------ */}
      <View style={stl01b}>
        <View style={stl01c}>
          <Text style={stl04b}>Entre usando a conta do</Text>

          <TouchableOpacity style={stl02} onPress={info.enter}>
            <Text style={stl02a}>Google</Text>
          </TouchableOpacity>

          <br />

          <TouchableOpacity onPress={info.toTempUsers}>
            <Text style={stl04b}>TEMP USERs</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={info.toTerms}>
          <Text style={stl04b}>Termos de Uso</Text>
        </TouchableOpacity>
      </View>
      {/* END */}
      {/* ------------------------------ */}
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

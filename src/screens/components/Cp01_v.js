// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

// import Internals
import { Cp02 } from "./";
import { useStl, UseIcoMoon } from "../../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

// let stlBODY1 = [];
let stlBODY1 = [useStl.pad20];

let stlNAV1 = [useStl.shortBar];
let stlNAV1a = [useStl.navbarView];
let stlNAV1b = [useStl.leftBox];
let stlNAV1c = [useStl.centerBox];
let stlNAV1d = [useStl.rightBox];
let stlNAV2 = [useStl.titlePageLeft];
let stlBODY1e = [useStl.longBar];
// let stlBODY3 = []

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------
  <>
    {info.condMenu && <Cp02 path={info.path} toggleMenu={info.toggleMenu} />}

    <View style={stlNAV1}>
      {/* LEFT */}
      {/* ------------------------------ */}

      <View style={stlNAV1a}>
        <TouchableOpacity style={stlNAV1b} onPress={info.condGoTo}>
          <UseIcoMoon name={info.icon} size={22} color={"#fff"} />
        </TouchableOpacity>

        {/* CENTER */}
        {/* ------------------------------ */}

        <View style={stlNAV1c}>
          <Text style={stlNAV2}>{info.title}</Text>
        </View>

        {/* RIGHT */}
        {/* ------------------------------ */}
        <View style={stlNAV1d} />
      </View>
    </View>

    <ScrollView
      style={[!info.longBar && stlBODY1, { backgroundColor: "#f0f0f0" }]}
    >
      {/* LONG BAR */}
      {/* ------------------------------ */}

      {info.longBar && <View style={stlBODY1e} />}

      {info.children}

      {/* END */}
      {/* ------------------------------ */}
    </ScrollView>
  </>
  // ---------------
  // #endregion
  // ***************************************
);

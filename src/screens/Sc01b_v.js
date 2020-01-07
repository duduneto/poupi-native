// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text } from "react-native";

// import Internals
import { Cp01 } from "./components";
import { useStl } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: STYLEs
// ---------------

let stlBG1 = [useStl.flex1];

let stlBODY1 = [useStl.scrollLongBar];
let stlBODY1a = [useStl.card, useStl.cardLongBar];
let stlBODY1b = [useStl.longBar];
let stlBODY2 = [useStl.mgB20, useStl.txtBase];
let stlBODY2b = [useStl.mgB20];
// let stlBODY3 = []

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: EXPORTs
// ---------------

// list Item
export const itemList = item => <Text style={stlBODY2b}>{item}</Text>;

// ---------------
// #endregion
// ***************************************

export default ({ info }) => (
  // ***************************************
  // #region :: RENDER
  // ---------------

  <Cp01 title={info.scContent.titleBar} longBar>
    {/* LONG BAR */}
    {/* ------------------------------ */}

    <View style={stlBODY1b} />

    {/* BODY */}
    {/* ------------------------------ */}

    <View style={useStl.pad20}>
      {/* CARD */}
      {/* ------------------------------ */}

      <View style={stlBG1}>
        <View style={stlBODY1a}>
          <Text style={stlBODY2}>{info.scContent.titleTerms}</Text>

          {/* PARAGRAPHS FUNCTION */}
          {/* ------------------------------ */}
          {info.listParagraphs}
        </View>

        {/* END */}
        {/* ------------------------------ */}
      </View>
    </View>
  </Cp01>

  // ---------------
  // #endregion
  // ***************************************
);

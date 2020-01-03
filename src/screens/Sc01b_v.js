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

export default ({ info }) => {
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

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <Cp01 title="Termos" longBar>
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
            <Text style={stlBODY2}>CONTEÚDO DOS TERMOS</Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text style={stlBODY2b}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
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
};

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

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
  let stlBODY1 = [useStl.scrollShortBar, useStl.flex1];
  let stlBODY1a = [useStl.card, useStl.flex1, useStl.flexCenter];
  let stlBODY1b = [useStl.flexCenter];
  let stlBODY1c = [useStl.mgB20, useStl.flexRow];
  let stlBODY1d = [{ maxHeight: 160, textAlign: "center" }];
  let stlBODY2 = [useStl.mgB20, useStl.txtTitleCard];
  let stlBODY2b = [useStl.mgB20, useStl.txtBase];
  let stlBODY2c = [useStl.txtPrimaryInverse];
  let stlBODY3 = [useStl.btn, useStl.btnMedium, useStl.btnPrimary];

  // ---------------
  // #endregion
  // ***************************************

  return (
    // ***************************************
    // #region :: RENDER
    // ---------------

    <View style={stlBG1}>
      {/* NAV */}
      {/* ------------------------------ */}

      <Cp01 title="Onboarding" type="short" />

      {/* CARD */}
      {/* ------------------------------ */}

      <View style={stlBODY1}>
        <View style={stlBODY1a}>
          {/* STEP 1 */}
          {/* ------------------------------ */}
          <>
            <Text style={stlBODY2}>IMAGEM 1</Text>
            <ScrollView style={stlBODY1d}>
              <Text style={stlBODY2b}>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </Text>
            </ScrollView>
          </>

          {/* STEP 2 */}
          {/* ------------------------------ */}

          {/* <>
            <Text style={stlBODY2}>IMAGEM 2</Text>
            <Text style={stlBODY2b}>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </Text>
          </> */}

          {/* STEP 3 */}
          {/* ------------------------------ */}

          {/* <>
            <Text style={stlBODY2}>IMAGEM 3</Text>
            <Text style={stlBODY2b}>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </Text>
          </> */}
        </View>

        <View style={stlBODY1b}>
          {/* DOTs */}
          {/* ------------------------------ */}

          <View style={stlBODY1c}>
            <View style={info.dotState} />
            <View style={info.dotState} />
            <View style={info.dotState} />
          </View>

          <TouchableOpacity style={stlBODY3} onPress={info.event}>
            <Text style={stlBODY2c}>CLICK HERE!</Text>
          </TouchableOpacity>
        </View>

        {/* END */}
        {/* ------------------------------ */}
      </View>
    </View>

    // ---------------
    // #endregion
    // ***************************************
  );
};

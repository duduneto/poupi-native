// #region :: IMPORTs
// ***************************************
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import dbRef from "../useMorfos/dbRef";
import defaultImg from "../images/default.jpg";
import { ItemCateg } from "./Sc02a_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
  let options = dbRef.category;
  let history = useHistory();
  let changeRd = useChangeRd();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // console.log(rdProducts.category)
  let listCateg = Object.keys(options).map((item, idx) => {
    let goTo = () => {
      changeRd("rdCatSelected", options[item].label);
      history.push("/products");
    };
    let source = options[item].image;
    let condThumbnail = !source ? defaultImg : source;
    let infoReturn = {
      name: options[item].label,
      image: options[item].image,
      condThumbnail,
      goTo
    };

    return <ItemCateg key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    listCateg
    // toSignIn
  };

  return <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

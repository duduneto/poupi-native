// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import defaultImg from "../images/default.jpg";
import { ItemProduct } from "./Sc02b_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdProducts, rdCatSelected } = useRd();
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

  // let model = () =>

  let listProducts = Object.keys(rdProducts).map((item, idx) => {
    const searchCateg = rdProducts[item].category === rdCatSelected;
    console.log(searchCateg);

    if (searchCateg) {
      let goTo = () => {
        changeRd("rdProdSelected", rdProducts[item]);
        history.push("/profile-product");
      };
      let source = rdProducts[item].image;
      let condThumbnail = !source ? defaultImg : source;
      let infoReturn = {
        name: rdProducts[item].name,
        description: rdProducts[item].description,
        condThumbnail,
        goTo
      };

      return searchCateg && <ItemProduct key={idx} info={infoReturn} />;
    } else {
      return false;
    }
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    listProducts,
    rdContent
    // toSignIn
  };

  return <AllSc.Sc02b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

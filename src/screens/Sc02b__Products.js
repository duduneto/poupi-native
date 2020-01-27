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
  let { rdContent, rdAuthUser, rdProducts } = useRd();
  let history = useHistory();
  // let { rdProdSelect } = useRd();
  let changeRd = useChangeRd();

  // let redirect = rdAuthUser && history.push("/sign-in");
  let redirect = false;

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

  // let toSignIn = () => history.push("/sign-in");
  // let goToProfileProduct = () => history.push("/profile-store");

  let listProducts = Object.keys(rdProducts).map((item, idx) => {
    let goTo = () => {
      changeRd("rdProdSelect", rdProducts[item]);
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

    return <ItemProduct key={idx} info={infoReturn} />;
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

  return redirect || <AllSc.Sc02b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

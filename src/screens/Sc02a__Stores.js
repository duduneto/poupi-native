// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import defaultImg from "../images/default.jpg";
import { ItemStore } from "./Sc02a_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdStores, rdAuthUser } = useRd();
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

  // let goToProfileStore = () => history.push("/profile-store");
  // let toSignIn = () => history.push("/sign-in");

  let listStores = Object.keys(rdStores).map((item, idx) => {
    let goTo = () => {
      changeRd("rdStoreSelect", rdStores[item]);
      history.push("/profile-store");
    };
    let source = rdStores[item].image;
    let condThumbnail = !source ? defaultImg : source;
    let infoReturn = {
      name: rdStores[item].name,
      description: rdStores[item].description,
      condThumbnail,
      goTo
    };

    return <ItemStore key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    listStores
    // toSignIn
  };

  return <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

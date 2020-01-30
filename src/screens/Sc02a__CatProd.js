// #region :: IMPORTs
// ***************************************
// ---------------

// import Packages
import React from "react";
import { Text } from "react-native";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, UseFbListItems } from "../useMorfos";
// import dbRef from "../useMorfos/dbRef";
import defaultImg from "../images/default.jpg";
import { ItemCateg, noItemComp } from "./Sc02a_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
  // let options = dbRef.category;
  let history = useHistory();
  let changeRd = useChangeRd();

  // SetCall
  let infoListCat = {
    collection: "category",
    reducerName: "rdCatSelected",
    noItem: noItemComp
  };

  const [CATEGS] = UseFbListItems(infoListCat);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}
  let listCateg = (
    <CATEGS
      renderProps={({ item, idx }) => {
        let goTo = () => {
          changeRd("rdCatSelected", item.label);
          history.push("/products");
        };
        let source = item.image;
        let condThumbnail = !source ? defaultImg : source;
        let infoReturn = {
          name: item.label,
          image: item.image,
          condThumbnail,
          goTo
        };
        return <ItemCateg key={idx} info={infoReturn} />;
      }}
    />
  );

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

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

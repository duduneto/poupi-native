// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";
import { Text } from "react-native";

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

  let listProducts = Object.values(rdProducts).map((item, idx) => {
    const searchCateg = item.category === rdCatSelected;
    console.log(searchCateg);

    if (searchCateg) {
      let goTo = () => {
        changeRd("rdProdSelected", item);
        history.push("/profile-product");
      };
      let source = item.image;
      let condThumbnail = !source ? defaultImg : source;
      let infoReturn = {
        name: item.name,
        description: item.description,
        condThumbnail,
        goTo
      };

      return searchCateg && <ItemProduct key={idx} info={infoReturn} />;
    } else {
      return false;
    }
  });

  console.log("listProducts", listProducts);

  let condListProd =
    listProducts[0] === false ? (
      <Text>Nenhum item encontrado</Text>
    ) : (
      listProducts
    );

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    condListProd,
    listProducts,
    rdContent
    // toSignIn
  };

  return <AllSc.Sc02b_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

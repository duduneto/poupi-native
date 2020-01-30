// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import { ItemProduct } from "../screens/Sc02b_v";
import defaultImg from "../images/default.jpg";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOOKs + VARs
// ---------------

// set Hooks
let { rdProducts, rdCatSelected } = useRd();
let history = useHistory();
let changeRd = useChangeRd();

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

let listProducts = Object.values(rdProducts).map((item, idx) => {
  const searchCateg = item.category === rdCatSelected;

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

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import { useHistory, useRd, useChangeRd } from "../../useMorfos";
import mockDb from "./mockDb.json";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export let SetCategProdListFb = Info => {
  // set Hooks
  let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  let arrCateg = rdContent.sc02a.arrCateg;

  let mapItems = arrCateg.map((item, idx) => {
    let goTo = () => {
      changeRd("rdCategSelected", item.id);
      history.push("/products");
    };
    let source = item.image;
    let condThumbnail = !source ? Info.defaultImg : source;
    let infoReturn = {
      name: item.label,
      image: item.image,
      condThumbnail,
      goTo
    };

    return <Info.CompReturn key={idx} info={infoReturn} />;
  });
  let condListItems = mapItems.length === 0 ? Info.noItemComp : mapItems;
  return condListItems;
};
export let SetCategProdListMockDb = Info => {
  // set Hooks
  let history = useHistory();
  let changeRd = useChangeRd();
  let arrCateg = Object.values(mockDb.content.pt.sc02a.arrCateg);

  let mapItems = arrCateg.map((item, idx) => {
    let goTo = () => {
      changeRd("rdCategSelected", item.id);
      history.push("/products");
    };
    let source = item.image;
    let condThumbnail = !source ? Info.defaultImg : source;
    let infoReturn = {
      name: item.label,
      image: item.image,
      condThumbnail,
      goTo
    };

    return <Info.CompReturn key={idx} info={infoReturn} />;
  });

  let condListItems = mapItems.length === 0 ? Info.noItemComp : mapItems;
  return condListItems;
};

// ---------------
// #endregion
// ***************************************

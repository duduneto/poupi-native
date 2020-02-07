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

export default (info, dbFb) => {
  // set Hooks
  let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  let arrFb = rdContent.sc02a.arrCateg;
  let arrMock = Object.values(mockDb.content.pt.sc02a.arrCateg);
  let condArr = dbFb ? arrFb : arrMock;

  let mapItems = condArr.map((item, idx) => {
    let goTo = () => {
      changeRd("rdCategSelected", item.id);
      history.push("/products");
    };

    let source = item.image;
    let condThumbnail = !source ? info.defaultImg : source;

    let infoReturn = {
      name: item.label,
      image: item.image,
      condThumbnail,
      goTo
    };

    return <info.CompReturn key={idx} info={infoReturn} />;
  });

  let condListItems = mapItems.length === 0 ? info.noItemComp : mapItems;
  return condListItems;
};

// ---------------
// #endregion
// ***************************************

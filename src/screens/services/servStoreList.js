// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
// import * as allSc from "./";
import {
  useHistory,
  useRd,
  useChangeRd,
  UseFbListItems
} from "../../useMorfos";
import mockDb from "./mockDb.json";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default (info, dbFb) => {
  // set Hooks
  let history = useHistory();
  let changeRd = useChangeRd();

  let SetStoreListFb = () => {
    // SetCall
    let infoListCat = {
      collection: "stores",
      rdName: "rdStores",
      noItem: info.noItemComp
    };

    const [STORES] = UseFbListItems(infoListCat);

    return (
      <STORES
        renderProps={({ item, idx }) => {
          let goTo = () => {
            changeRd("rdStoreSelected", item);
            history.push("/profile-store");
          };
          let source = item.image;
          let condThumbnail = !source ? info.defaultImg : source;
          let infoReturn = {
            name: item.name,
            description: item.description,
            image: item.image,
            condThumbnail,
            goTo
          };
          return <info.CompReturn key={idx} info={infoReturn} />;
        }}
      />
    );
  };
  let SetStoreListMockDb = () => {
    let mapItems = Object.values(mockDb.stores).map((item, idx) => {
      let goTo = () => {
        changeRd("rdStoreSelected", item);
        history.push("/profile-store");
      };
      let source = item.image;
      let condThumbnail = !source ? info.defaultImg : source;
      let infoReturn = {
        name: item.name,
        description: item.description,
        condThumbnail,
        goTo
      };

      return <info.CompReturn key={idx} info={infoReturn} />;
    });
    let condListItems = mapItems.length === 0 ? info.noItemComp : mapItems;
    return condListItems;
  };

  return dbFb ? SetStoreListFb() : SetStoreListMockDb();
};

// ---------------
// #endregion
// ***************************************

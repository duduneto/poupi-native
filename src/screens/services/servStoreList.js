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

export let SetStoreListFb = Info => {
  // set Hooks
  // let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // SetCall
  let infoListCat = {
    collection: "stores",
    rdName: "rdStores",
    noItem: Info.noItemComp
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
        let condThumbnail = !source ? Info.defaultImg : source;
        let infoReturn = {
          name: item.name,
          description: item.description,
          image: item.image,
          condThumbnail,
          goTo
        };
        return <Info.CompReturn key={idx} info={infoReturn} />;
      }}
    />
  );
};
export let SetStoreListMockDb = Info => {
  let history = useHistory();
  let changeRd = useChangeRd();

  // let goToProfileStore = () => history.push("/profile-store");
  // let toSignIn = () => history.push("/sign-in");

  let mapItems = Object.values(mockDb.stores).map((item, idx) => {
    let goTo = () => {
      changeRd("rdStoreSelected", item);
      history.push("/profile-store");
    };
    let source = item.image;
    let condThumbnail = !source ? Info.defaultImg : source;
    let infoReturn = {
      name: item.name,
      description: item.description,
      condThumbnail,
      goTo
    };

    return <Info.CompReturn key={idx} info={infoReturn} />;
  });
  let condListItems = mapItems.length === 0 ? Info.noItemComp : mapItems;
  return condListItems;
};

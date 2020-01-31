// import Packages
import React from "react";

// import Internals
import mockDb from "./mockDb.json";
import {
  useHistory,
  useRd,
  useChangeRd,
  UseFbListItems
} from "../../useMorfos";

let dbFirestore = true;

let SetCategProdListFb = Info => {
  // set Hooks
  let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // SetCall
  let infoListCat = {
    collection: "category",
    reducerName: "rdCategList",
    noItem: Info.noItemComp
  };

  const [CATEGS] = UseFbListItems(infoListCat);

  return (
    <CATEGS
      renderProps={({ item, idx }) => {
        let goTo = () => {
          changeRd("rdCategSelected", item.label);
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
      }}
    />
  );
};
let SetCategProdListMockDb;

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

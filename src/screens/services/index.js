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

let dbFirestore = false;

let SetCategProdListFb = Info => {
  // set Hooks
  // let { rdContent } = useRd();
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

let SetCategProdListMockDb = Info => {
  // set Hooks
  // let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  let mapItems = Object.values(mockDb.category).map((item, idx) => {
    let goTo = () => {
      changeRd("rdCatSelected", item.label);
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

  let condListItems = mapItems.length === 5 ? Info.noItemComp : mapItems;
  return condListItems;
};

let SetProdListFb = Info => {};

let SetProdListMockDb = Info => {
  return Object.values(mockDb.products).map((item, idx) => {
    const searchCateg = item.category === rdCategSelected;
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
};

// let SetProdListMockDb = Info => {}
// let SetProdListFb = Info => {}

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

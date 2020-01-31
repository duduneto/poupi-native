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
  });

  let condListItems = mapItems.length === 0 ? Info.noItemComp : mapItems;
  return condListItems;
};

// ... .... ... ... ...

let SetProdListFb = Info => {
  // set Hooks
  let { rdCategSelected } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // SetCall
  let infoListCat = {
    collection: "products",
    reducerName: "rdProducts",
    where1: {
      field: "category",
      type: "==",
      value: rdCategSelected
    },
    noItem: Info.noItemComp
  };

  const [PRODS] = UseFbListItems(infoListCat);

  // console.log("aqwe", infoListCat);
  return (
    <PRODS
      renderProps={({ item, idx }) => {
        let goTo = () => {
          changeRd("rdProdSelected", item);
          history.push("/profile-product");
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

let SetProdListMockDb = Info => {
  // set Hooks
  let { rdCategSelected } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  let arrProducts = Object.values(mockDb.products);
  let filteredItems = arrProducts.filter(
    item => item.category === rdCategSelected
  );

  let mapItems = filteredItems.map((item, idx) => {
    let goTo = () => {
      changeRd("rdProdSelected", item);
      history.push("/profile-product");
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

// let SetProdListMockDb = Info => {}
// let SetProdListFb = Info => {}

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

export let prodList = info =>
  dbFirestore ? SetProdListFb(info) : SetProdListMockDb(info);

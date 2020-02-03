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
  // let { rdContent } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // SetCall
  let infoListCat = {
    collection: "category",
    rdName: "rdCategList",
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
    rdName: "rdProducts",
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

// ... .... ... ... ...

let SetStoreListFb = Info => {
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
let SetStoreListMockDb = Info => {
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

// ... .... ... ... ...

let SetCatAddProdFb = Info => {
  // set Hooks
  // let { rdContent } = useRd();

  // SetCall
  let infoListCat = {
    collection: "category",
    rdName: "rdCategList"
  };

  const [CATEGSX] = UseFbListItems(infoListCat);

  return (
    <CATEGSX
      renderProps={({ item, idx }) => {
        let infoReturn = {
          label: item.label,
          value: item.id
        };
        return <Info.CompReturn key={idx} info={infoReturn} />;
      }}
    />
  );
};
let SetCatAddProdMockDb = Info => {
  let listOptions = Object.values(mockDb.category).map((item, idx) => {
    let infoReturn = {
      label: item.label,
      value: idx
    };
    return <Info.CompReturn key={idx} info={infoReturn} />;
  });
  return listOptions;
};

// ... .... ... ... ...
// let SetProdListFb = Info => {}
// let SetProdListMockDb = Info => {}

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

export let prodList = info =>
  dbFirestore ? SetProdListFb(info) : SetProdListMockDb(info);

export let servStoreList = info =>
  dbFirestore ? SetStoreListFb(info) : SetStoreListMockDb(info);

export let catListAddProd = info =>
  dbFirestore ? SetCatAddProdFb(info) : SetCatAddProdMockDb(info);

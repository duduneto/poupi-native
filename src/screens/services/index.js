// import Packages
import React from "react";
import { TouchableOpacity } from "react-native";

// import Internals
import mockDb from "./mockDb.json";
import {
  useHistory,
  useRd,
  useChangeRd,
  UseFbListItems,
  useFbAddData
} from "../../useMorfos";

let dbFirestore = true;

// ****************************

let SetCategProdListFb = Info => {
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
let SetCategProdListMockDb = Info => {
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

// ****************************

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
  let { rdCategSelected, rdProducts } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();
  let arrProducts = Object.values(mockDb.products);

  React.useEffect(() => {
    changeRd("rdProducts", arrProducts);
  }, []);

  // let filteredItems = arrProducts.filter(
  let filteredItems =
    rdProducts && rdProducts.filter(item => item.category === rdCategSelected);

  let mapItems =
    rdProducts &&
    filteredItems.map((item, idx) => {
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

  let condListItems =
    rdProducts && mapItems.length === 0 ? Info.noItemComp : mapItems;
  return condListItems;
};

// ****************************

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

// ****************************

let SetCatAddProdFb = Info => {
  // set Hooks
  let { rdContent } = useRd();
  let arrCateg = rdContent.sc02a.arrCateg;

  let listOptions = Object.values(arrCateg).map((item, idx) => {
    let infoReturn = {
      label: item.label,
      value: item.id
    };
    return <Info.CompReturn key={idx} info={infoReturn} />;
  });
  return listOptions;
};
let SetCatAddProdMockDb = Info => {
  let arrCateg = mockDb.content.pt.sc02a.arrCateg;

  let listOptions = Object.values(arrCateg).map((item, idx) => {
    let infoReturn = {
      label: item.label,
      value: item.id
    };
    return <Info.CompReturn key={idx} info={infoReturn} />;
  });
  return listOptions;
};

// ****************************

let setDataProdFb = info => {
  // set hooks
  let rdAuthUser = info.rdAuthUser;
  let callFbAddData = info.callFbAddData;
  let history = info.history;

  // SetCall
  let infoAddProd = {
    collection: "products",
    reducerName: "rdAddNewProd",
    dataToAdd: {
      createdAt: new Date(),
      ...info.sttValues,
      userId: rdAuthUser.docId
    }
  };

  let btnSave = () => {
    callFbAddData(infoAddProd);
    history.push("/category-products");
  };

  return <>{btnSave()}</>;
};
let setDataProdMockDb = info => {
  let arrProducts = Object.values(mockDb.products);

  let btnSave = () => {
    let infoProduct = {
      ...arrProducts,
      xxx: {
        docId: "xxx05",
        userId: info.rdAuthUser.docId,
        name: info.sttValues.Name,
        category: info.sttValues.Category,
        description: info.sttValues.Desc,
        image: "https://source.unsplash.com/200x150/?avocado&1"
      }
    };

    let arrInfoProduct = Object.values(infoProduct);
    info.changeRd("rdProducts", arrInfoProduct);
    info.history.push("/category-products");
  };
  return btnSave();
};

// ****************************

let SetRdContentFb = info => {
  // set Call
  let infoTemp = {
    collection: "content",
    rdName: "rdContent",
    docId: "pt"
  };

  // function Call
  info.callDocRd(infoTemp);

  return info.rdContent;
};
let SetRdContentMockDb = Info => {
  let content = mockDb.content.pt;

  return content;
};

// ****************************

// ****************************

// let SetProdListFb = Info => {}
// let SetProdListMockDb = Info => {}

// ****************************

export let condRdContent = info =>
  dbFirestore ? SetRdContentFb(info) : SetRdContentMockDb(info);

export let catProdList = info =>
  dbFirestore ? SetCategProdListFb(info) : SetCategProdListMockDb(info);

export let prodList = info =>
  dbFirestore ? SetProdListFb(info) : SetProdListMockDb(info);

export let servStoreList = info =>
  dbFirestore ? SetStoreListFb(info) : SetStoreListMockDb(info);

export let catListAddProd = info =>
  dbFirestore ? SetCatAddProdFb(info) : SetCatAddProdMockDb(info);

export let setDataProd = info =>
  dbFirestore ? setDataProdFb(info) : setDataProdMockDb(info);

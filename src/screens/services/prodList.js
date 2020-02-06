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

export let SetProdListFb = Info => {
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
export let SetProdListMockDb = Info => {
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

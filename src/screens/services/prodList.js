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
  let { rdCategSelected, rdProducts } = useRd();
  let arrMock = Object.values(mockDb.products);
  let history = useHistory();
  let changeRd = useChangeRd();

  let SetProdListFb = () => {
    // SetCall
    let infoListCat = {
      collection: "products",
      rdName: "rdProducts",
      where1: {
        field: "category",
        type: "==",
        value: rdCategSelected
      },
      noItem: info.noItemComp
    };

    const [PRODS] = UseFbListItems(infoListCat);

    return (
      <PRODS
        renderProps={({ item, idx }) => {
          let goTo = () => {
            changeRd("rdProdSelected", item);
            history.push("/profile-provider");
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

  let SetProdListMockDb = () => {
    React.useEffect(() => {
      changeRd("rdProducts", arrMock);
    }, []);

    let filteredItems =
      rdProducts &&
      rdProducts.filter(item => item.category === rdCategSelected);

    let mapItems =
      rdProducts &&
      filteredItems.map((item, idx) => {
        let goTo = () => {
          changeRd("rdProdSelected", item);
          history.push("/profile-provider");
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

    let condListItems =
      rdProducts && mapItems.length === 0 ? info.noItemComp : mapItems;
    return condListItems;
  };

  return dbFb ? SetProdListFb() : SetProdListMockDb();
};

// ---------------
// #endregion
// ***************************************

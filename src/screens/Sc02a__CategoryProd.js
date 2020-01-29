// #region :: IMPORTs
// ***************************************
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../useMorfos";
import defaultImg from "../images/default.jpg";
import { ItemCateg } from "./Sc02a_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdProducts, rdAuthUser } = useRd();
  let history = useHistory();
  let changeRd = useChangeRd();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  let options = {
    opt1: {
      label: "Frutas",
      value: "frutas",
      image: "https://cdn.domtotal.com/img/noticias/2015-01/1253236_357228.jpg"
    },
    opt2: {
      label: "Legumes",
      value: "legumes",
      image:
        "https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2019/11/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123-760x450.jpg"
    },
    opt3: {
      label: "Verduras",
      value: "verduras",
      image:
        "http://www.nutrindoideais.com.br/wp/wp-content/uploads/2014/12/folhas-verdes-e-escuras.jpg"
    }
  };

  // console.log(rdProducts.category)
  let listCateg = Object.keys(options).map((item, idx) => {
    let goTo = () => {
      //   changeRd("rdStoreSelected", options[item]);
      console.log(options[item].label);
      history.push("/products");
    };
    let source = options[item].image;
    let condThumbnail = !source ? defaultImg : source;
    let infoReturn = {
      name: options[item].label,
      image: options[item].image,
      condThumbnail,
      goTo
    };

    return <ItemCateg key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdContent,
    listCateg
    // toSignIn
  };

  return <AllSc.Sc02a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

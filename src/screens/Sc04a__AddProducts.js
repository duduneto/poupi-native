// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";
import { PickerItem } from "./Sc04a_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdAuthUser, rdContent, rdProducts } = useRd();
  let { inputChange, sttValues } = useForm();
  let history = useHistory();
  let changeRd = useChangeRd();
  let scContent = rdContent.sc04a;
  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
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

  let listOptions = Object.keys(options).map((item, idx) => {
    let infoReturn = {
      label: options[item].label,
      value: options[item].value
    };

    return <PickerItem key={idx} info={infoReturn} />;
  });

  // let start = () => {}
  let getTxt = {
    iptName: txt => inputChange("Name", txt),
    iptEmail: txt => inputChange("Email", txt),
    iptCateg: (txt, idx) => inputChange("Category", txt),
    iptPhone: txt => inputChange("Phone", txt),
    iptDesc: txt => inputChange("Desc", txt)
  };

  let condOpt = !sttValues.Category ? options.opt1.value : sttValues.Category;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>
  let btnSave = () => {
    let infoProduct = {
      ...rdProducts,
      xxx05: {
        docId: "xxx05",
        userId: rdAuthUser.docId,
        name: sttValues.Name,
        category: sttValues.Category,
        description: sttValues.Desc,
        image: "https://source.unsplash.com/200x150/?avocado&1"
      }
    };
    changeRd("rdProducts", infoProduct);
    history.push("/products");
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    condOpt,
    listOptions,
    scContent,
    rdContent,
    btnSave,
    getTxt
    // toSignIn
  };

  return <AllSc.Sc04a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";
import { PickerItem } from "./Sc04a_v";
import { catListAddProd } from "./services";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdAuthUser, rdContent, rdProducts } = useRd();
  // let options = dbRef.category;
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

  let listOptions = catListAddProd({
    CompReturn: PickerItem,
    sttValues
  });

  let condOpt = !sttValues.Category ? 0 : sttValues.Category;

  // let start = () => {}
  let getTxt = {
    iptName: txt => inputChange("Name", txt),
    iptEmail: txt => inputChange("Email", txt),
    iptCateg: (txt, idx) => inputChange("Category", idx),
    iptPhone: txt => inputChange("Phone", txt),
    iptDesc: txt => inputChange("Desc", txt)
  };

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

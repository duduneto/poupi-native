// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";
import dbRef from "../useMorfos/dbRef";
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
  let options = dbRef.category;
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

  let listOptions = Object.keys(options).map((item, idx) => {
    let infoReturn = {
      label: options[item].label,
      value: idx
    };
    return <PickerItem key={idx} info={infoReturn} />;
  });

  // let start = () => {}
  let getTxt = {
    iptName: txt => inputChange("Name", txt),
    iptEmail: txt => inputChange("Email", txt),
    iptCateg: (txt, idx) => inputChange("Category", idx),
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

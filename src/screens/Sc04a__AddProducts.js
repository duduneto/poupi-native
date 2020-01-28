// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent, rdProducts } = useRd();
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

  // let start = () => {}
  let getTxt = {
    iptName: txt => inputChange("Name", txt),
    iptEmail: txt => inputChange("Email", txt),
    iptPhone: txt => inputChange("Phone", txt),
    iptDesc: txt => inputChange("Desc", txt)
  };
  console.log("sttValues", sttValues);
  console.log("rdProducts", rdProducts);

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
        userId: "xxx05",
        name: sttValues.Name,
        description: sttValues.Desc,
        image: "https://source.unsplash.com/200x150/?avocado&1"
      }
    };
    changeRd("rdProducts", infoProduct);
    // console.log("reducer", rdProducts);
    history.push("/products");
  };

  // let toSignIn = () => history.push("/sign-in");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
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

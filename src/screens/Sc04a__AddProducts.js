// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useForm } from "../useMorfos";
import { PickerItem } from "./Sc04a_v";
import { catListAddProd, setDataProd } from "./services";

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
  let scContent = rdContent.sc04a;
  let history = useHistory();
  let changeRd = useChangeRd();
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
  let getTxt = {
    iptName: txt => inputChange("Name", txt),
    iptEmail: txt => inputChange("Email", txt),
    iptCateg: value => inputChange("Category", value),
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
  let infoPar = {
    sttValues,
    changeRd,
    history,
    rdAuthUser,
    rdProducts
  };
  let saveDataProd = () => setDataProd(infoPar);
  // let saveDataProd = () => console.log("aqui01");

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    saveDataProd,
    listOptions,
    scContent,
    rdContent,
    condOpt,
    getTxt
  };

  return <AllSc.Sc04a_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

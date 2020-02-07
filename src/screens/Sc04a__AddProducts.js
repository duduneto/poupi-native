// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import {
  useHistory,
  useRd,
  useChangeRd,
  useForm,
  useFbAddData
} from "../useMorfos";
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
  let callFbAddData = useFbAddData();
  let scContent = rdContent.sc04a;
  let history = useHistory();
  let changeRd = useChangeRd();
  let optDefault = rdContent.sc02a.arrCateg[0].id;
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

  let condOpt =
    !sttValues.category && optDefault ? optDefault : sttValues.category;

  let getTxt = {
    iptName: txt => inputChange("name", txt),
    iptAmount: txt => inputChange("amount", txt),
    iptCateg: value => inputChange("category", value),
    iptPrice: txt => inputChange("price", txt),
    iptDesc: txt => inputChange("desc", txt)
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>
  let infoPar = {
    callFbAddData,
    optDefault,
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

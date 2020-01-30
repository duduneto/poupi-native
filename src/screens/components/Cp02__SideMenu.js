// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd } from "../../useMorfos";
import { ItemMenu } from "./Cp02_v";

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
  let scContent = rdContent.cp01;
  let history = useHistory();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let arrMenu = [
    { icon: "image", label: scContent.sc03a, goTo: "/profile" },
    { icon: "image", label: scContent.sc02c, goTo: "/stores" },
    { icon: "image", label: scContent.sc02a, goTo: "/category-products" },
    { icon: "image", label: scContent.sc04a, goTo: "/add-products" }
  ];
  console.log("arrMenu", arrMenu);
  let ItemsList = arrMenu.map((item, idx) => {
    let goTo = () => {
      history.push(item.goTo);
      props.toggleMenu();
    };

    let condActiveMenu = item.goTo === props.path;
    let condColor = condActiveMenu ? "#00ff66" : "#fff";
    let infoReturn = {
      icon: item.icon,
      label: item.label,
      condActiveMenu,
      condColor,
      goTo
    };

    return <ItemMenu key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    scContent,
    ItemsList,
    toggleMenu: props.toggleMenu
  };

  return <AllSc.Cp02_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

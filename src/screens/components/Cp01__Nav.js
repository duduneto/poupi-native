// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd } from "../../useMorfos";

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
  let [sttMenu, setMenu] = React.useState(false);

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

  // let model = () =>
  let Nav = {
    "/temp-users": {
      title: scContent.sc00b,
      back: "/sign-in",
      longBar: false
    },
    "/terms": {
      title: scContent.sc01b,
      back: "/sign-in",
      longBar: true
    },
    "/category-products": {
      title: scContent.sc02a,
      longBar: false
    },
    "/products": {
      title: scContent.sc02b,
      back: "/category-products",
      longBar: false
    },
    "/stores": {
      title: scContent.sc02c,
      longBar: false
    },
    "/profile": {
      title: scContent.sc03a,
      longBar: true
    },
    "/profile-product": {
      title: scContent.sc03b,
      back: "/products",
      longBar: true
    },
    "/profile-store": {
      title: scContent.sc03c,
      back: "/stores",
      longBar: true
    },
    "/add-products": {
      title: scContent.sc04a,
      back: "/category-products",
      longBar: true
    },
    "/list-acordion": {
      title: scContent.sc05a,
      back: "/",
      longBar: false
    }
  };

  let CompNav = Nav[props.path];

  let icon = !CompNav.back ? "menu" : "left";

  let condGoTo = () =>
    !CompNav.back ? toggleMenu() : history.push(CompNav.back);

  let toggleMenu = () => setMenu(!sttMenu);
  let condMenu = sttMenu;

  let title = CompNav.title;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    children: props.children,
    longBar: CompNav.longBar,
    path: props.path,

    rdContent,
    condGoTo,
    title,
    icon,
    toggleMenu,
    condMenu
  };

  return <AllSc.Cp01_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

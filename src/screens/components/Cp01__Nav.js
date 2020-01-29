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
      menu: false,
      longBar: false
    },
    "/terms": {
      title: scContent.sc01b,
      menu: false,
      longBar: true
    },
    "/category-products": {
      title: scContent.sc02a,
      menu: true,
      longBar: false
    },
    "/products": {
      title: scContent.sc02b,
      menu: false,
      longBar: false
    },
    "/stores": {
      title: scContent.sc02c,
      menu: true,
      longBar: false
    },
    "/profile": {
      title: scContent.sc03a,
      menu: true,
      longBar: true
    },
    "/profile-product": {
      title: scContent.sc03b,
      menu: false,
      longBar: true
    },
    "/profile-store": {
      title: scContent.sc03c,
      menu: false,
      longBar: true
    },
    "/add-products": {
      title: scContent.sc04a,
      menu: false,
      longBar: true
    }
  };

  let CompNav = Nav[props.path];

  let icon = CompNav.menu ? "menu" : "left";

  let condGoTo = () =>
    CompNav.menu
      ? CompNav.menu
        ? toggleMenu()
        : history.push(CompNav.menu)
      : history.goBack();

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

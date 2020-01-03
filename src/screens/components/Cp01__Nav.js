// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd, useStl } from "../../useMorfos";

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { rdContent } = useRd();
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

  let icon = props.goTo === "menu" ? props.goTo : "left";

  let goTo = () =>
    props.goTo
      ? (props.goTo = "menu" ? toggleMenu() : history.push(props.goTo))
      : history.push("/sign-in");

  let toggleMenu = () => setMenu(!sttMenu);
  let condMenu = sttMenu;

  let title = props.title;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    children: props.children,
    longBar: props.longBar,

    rdContent,
    goTo,
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

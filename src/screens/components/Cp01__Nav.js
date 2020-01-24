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
      title: "TemUsers",
      menu: false,
      longBar: false
    },
    "/terms": {
      title: "Termos de Uso",
      menu: false,
      longBar: true
    },
    "/stores": {
      title: "Lojas",
      menu: true,
      longBar: false
    },
    "/products": {
      title: "Produtos",
      menu: true,
      longBar: false
    },
    "/profile": {
      title: "Meu Perfil",
      menu: true,
      longBar: true
    },
    "/profile-product": {
      title: "Perfil do Produto",
      menu: false,
      longBar: true
    },
    "/profile-store": {
      title: "Perfil da Loja",
      menu: false,
      longBar: true
    },
    "/add-products": {
      title: "Adicionar Produtos",
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
      : history.push("/sign-in");

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

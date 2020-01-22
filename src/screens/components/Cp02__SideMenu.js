// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from "react";

// import Internals
import * as AllSc from "./";
import { useHistory, useRd, useChangeRd } from "../../useMorfos";
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
  let history = useHistory();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // let start = () => {}

  let arrMenu = [
    { icon: "image", label: "Meu Perfil", goTo: "/profile" },
    { icon: "image", label: "Lojas", goTo: "/stores" },
    { icon: "image", label: "Produtos", goTo: "/products" },
    { icon: "image", label: "Perfil do Produto", goTo: "/profile-product" },
    { icon: "image", label: "Adicionar Produto", goTo: "/add-products" }
  ];

  let ItemsList = arrMenu.map((item, idx) => {
    let goTo = () => history.push(item.goTo);

    let infoReturn = {
      icon: item.icon,
      label: item.label,
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
    rdContent,
    toggleMenu: props.toggleMenu,
    ItemsList
  };

  return <AllSc.Cp02_v info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

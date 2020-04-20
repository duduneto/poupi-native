// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {useDispatch} from 'react-redux';

// import Internals
import Cp02, {ItemMenu} from './Cp02_v';

import {useRouter} from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  // let rdAuthUser = useSelector(state => state.rdAuthUser);
  let callRouter = useRouter();
  let dispatch = useDispatch();

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

  let arrMenu = [
    {icon: 'image', label: 'Meu Perfil', goTo: 'myProfile'},
    {icon: 'tool', label: 'Lista de Items', goTo: 'itemsList'},
    {icon: 'power', label: 'Sair', goTo: 'logout'},
  ];

  let setSignOut = () => {
    // call Hook
    // dispatch('rdAuthUser', null);
    callRouter('signin');
  };

  let ItemsList = arrMenu.map((item, idx) => {
    let logout = item.goTo === 'logout';
    let goTo = () => {
      if (logout) {
        setSignOut();
      } else {
        callRouter(item.goTo);
        props.toggleMenu();
      }
    };

    let condActiveMenu = item.goTo === props.path;
    let condColor = condActiveMenu ? '#73ef54' : '#fff';
    let infoReturn = {
      icon: item.icon,
      label: item.label,
      condActiveMenu,
      condColor,
      goTo,
    };

    return <ItemMenu key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    toggleMenu: props.toggleMenu,
    ItemsList,
  };

  return <Cp02 info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

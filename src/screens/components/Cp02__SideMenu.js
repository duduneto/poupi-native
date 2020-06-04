// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Internals
import Cp02, { ItemMenu } from './Cp02_v';

import { useRouter } from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  // let rdAuthUser = useSelector(state => state.rdAuthUser);
  let rdContent = useSelector(state => state.rdContent);
  let rdPermissionAdm = useSelector(state => state.rdPermissionAdm);

  let scContent = rdContent[1].cp01;
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
    { icon: 'user', label: scContent.myPf, goTo: 'myPf' },
    {
      icon: 'calendar',
      label: scContent.myScheduledClasses,
      goTo: 'myScheduledClasses',
    },
    {
      icon: 'zap',
      label: scContent.modalitiesFilter,
      goTo: 'modalitiesFilter',
    },
    { icon: 'power', label: scContent.logout, goTo: 'logout' },
  ];
  let arrMenuAdm = [
    { icon: 'user', label: scContent.myPf, goTo: 'myPf' },
    {
      icon: 'calendar',
      label: scContent.myScheduledClasses,
      goTo: 'myScheduledClasses',
    },
    {
      icon: 'zap',
      label: scContent.modalitiesFilter,
      goTo: 'modalitiesFilter',
    },
    { icon: 'unlock', label: scContent.permissions, goTo: 'permissions' },
    { icon: 'power', label: scContent.logout, goTo: 'logout' },
  ];

  const condArr = rdPermissionAdm ? arrMenuAdm : arrMenu;

  let setSignOut = () => {
    // call Hook
    dispatch({ type: 'signOut' });
  };

  let ItemsList = condArr.map((item, idx) => {
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
    scContent,
    ItemsList,
  };

  return <Cp02 info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Cp01 from './Cp01_v';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let [sttMenu, setMenu] = React.useState(false);
  let rdPermissionAdm = useSelector(state => state.rdPermissionAdm);
  let callRouter = useRouter();
  let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  let toggleMenu = () => setMenu(!sttMenu);
  let condMenu = sttMenu;

  const goBack = () => {
    dispatch({ type: 'clearAction', rdName: 'rdEditFields' });
    callRouter(props.back);
  };

  let condGoTo = () => (!props.back ? toggleMenu() : goBack());

  const longBar = props.type === 'long';
  const title = props.title;
  const icon = props.icon;

  let condFab = rdPermissionAdm && props.fab;

  let goTo = () => callRouter(props.fab);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    toggleMenu,
    condGoTo,
    condFab,
    children: props.children,
    condMenu,
    longBar,
    title,
    icon,
    goTo,
  };

  return <Cp01 info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

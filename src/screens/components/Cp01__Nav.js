// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// import Internals
import Cp01 from './Cp01_v';
import {useSelector} from 'react-redux';
import {useRouter} from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00(props) {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let [sttMenu, setMenu] = React.useState(false);
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  let callRouter = useRouter();

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

  let toggleMenu = () => setMenu(!sttMenu);
  let condMenu = sttMenu;

  let condGoTo = () => (!props.back ? toggleMenu() : callRouter(props.back));

  const longBar = props.type === 'long';
  const title = props.title;
  const icon = props.icon;

  let condFab = rdAuthUser && rdAuthUser.typeAccount === 'adm' && props.fab;

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

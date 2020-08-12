// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Internals
import Sc00b, { ListItem, NoItemComp, LoaderComp } from './Sc00b_v';
import { useRouter, useCRUD } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Sc00() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { callRead } = useCRUD();
  let scContent = useSelector(state => state.rdContent[1].sc00b);
  let rdUsers = useSelector(state => state.rdUsers);
  let dispatch = useDispatch();
  let callRouter = useRouter();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('usersList');
  };
  React.useEffect(initList, []);

  let callList = () => {
    const loader = rdUsers === null;
    const noItem = rdUsers && !rdUsers.length;

    return loader ? (
      <LoaderComp />
    ) : noItem ? (
      <NoItemComp />
    ) : (
      rdUsers.map((item, idx) => {
        let goTo = () => {
          dispatch({ type: 'login', item }); // call Hook
          callRouter('onboarding'); // redirect
        };
        let infoReturn = {
          name: item.userName,
          goTo,
        };

        return <ListItem key={idx} info={infoReturn} />;
      })
    );
  };
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
    callList: callList(),
    scContent,
  };

  return <Sc00b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

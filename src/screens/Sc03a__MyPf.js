// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
import Sc03a from './Sc03a_v';
import defaultImg from '../images/default.jpg';
import { useRouter, useCRUD } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Redirect() {
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  let callRedirect = useRouter('redirect');
  let condRender = rdAuthUser === null;

  return condRender ? callRedirect('modalitiesFilter') : Fn03a();
}

function Fn03a() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  const { callUpdate, callDelete } = useCRUD();
  let scContent = useSelector(state => state.rdContent[1].sc03a);
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  // let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let { userName, email, image, docId } = rdAuthUser;
  let source = image;
  let condThumbnail = !source ? defaultImg : source;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // const signOut = () => callUpdate('signOut');
  const excludeUser = () =>
    callDelete('deleteUser', {
      collection: 'users',
      editId: docId,
    });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    userName,
    email,
    condThumbnail,
    scContent,
    excludeUser,
    // toSignIn
  };

  return <Sc03a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

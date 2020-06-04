// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import { useRouter, useCRUD } from '../useMorfos';
import Sc02a, { ItemCateg, NoItemComp, LoaderComp } from './Sc02a_v';
import defaultImg from '../images/default_wide.jpg';

// ---------------
// #endregion
// ***************************************

export default function Fn02a() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { callRead } = useCRUD();
  let dispatch = useDispatch();
  let scContent = useSelector(state => state.rdContent[1].sc02a);
  const rdModalities = useSelector(state => state.rdModalities);
  const condAccess = useSelector(state => state.rdPermissionAdm);
  let callRouter = useRouter();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('modalitiesList');
  };
  React.useEffect(initList, []);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const listMod = () => {
    const loader = rdModalities === null;
    const noItem = rdModalities && !rdModalities.length;

    return loader ? (
      <LoaderComp />
    ) : noItem ? (
      <NoItemComp txt={scContent.noItemComp} />
    ) : (
      rdModalities.map((item, idx) => {
        // const categ = item.modalityName.pt;
        const goTo = () => {
          dispatch({ type: 'clearAction', rdName: 'rdTeachers' });
          dispatch({ type: 'selectCateg', id: item.docId });
          callRouter('teachersList');
        };
        const toEdit = () => {
          dispatch({ type: 'selectToEdit', item });
          callRouter('addModality');
        };
        let source = item.imgUrl;
        let condThumbnail = !source ? defaultImg : source;
        const infoMap = {
          condAccess,
          labels: item.modalityName.pt,
          condThumbnail,
          toEdit,
          goTo,
        };

        return <ItemCateg key={idx} info={infoMap} />;
      })
    );
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    listMod: listMod(),
    scContent,
    // toSignIn
  };

  return <Sc02a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

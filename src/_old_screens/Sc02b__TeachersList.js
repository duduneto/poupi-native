// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import { useRouter, useCRUD } from '../useMorfos';
import Sc02b, { ItemCateg, NoItemComp, LoaderComp } from './Sc02b_v';
import defaultImg from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************

export default function Fn02b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let callRouter = useRouter();
  let dispatch = useDispatch();
  let { callRead } = useCRUD();
  let scContent = useSelector(state => state.rdContent[1].sc02b);
  let rdSelectedCateg = useSelector(state => state.rdSelectedCateg);
  let rdTeachers = useSelector(state => state.rdTeachers);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('teachersList', rdSelectedCateg);
  };
  React.useEffect(initList, []);

  // ---------------

  const listTeachers = () => {
    const loader = rdTeachers === null;
    const noItem = rdTeachers && !rdTeachers.length;

    return loader ? (
      <LoaderComp />
    ) : noItem ? (
      <NoItemComp txt={scContent.noItemComp} />
    ) : (
      rdTeachers.map((item, idx) => {
        const categ = item.userName;
        const goTo = () => {
          dispatch({ type: 'selectTeacher', obj: item });
          callRouter('teacherPf');
        };
        let source = item.imgUrl;
        let condThumbnail = !source ? defaultImg : source;
        const infoMap = {
          labels: categ,
          condThumbnail,
          txt: scContent.txt,
          noItemComp: scContent.noItemComp,
          goTo: goTo,
        };
        return <ItemCateg key={idx} info={infoMap} />;
      })
    );
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // const goTo = () => callRouter('teacherPf');

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    listTeachers: listTeachers(),
    scContent,
  };

  return <Sc02b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

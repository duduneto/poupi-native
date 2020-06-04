// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Internals
import Sc01b, { TxtComp } from './Sc01b_v';

// ---------------
// #endregion
// ***************************************

export default function Fn01b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc01c);
  let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const listTxt =
    scContent &&
    scContent.parArr.map((item, idx) => {
      const infoReturn = {
        txt: item,
      };
      console.log('item', item);

      return <TxtComp key={idx} info={infoReturn} />;
    });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  // let model = () =>

  const event = () => dispatch({ type: 'setRoute', target: 'signin' });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    event,
    scContent,
    listTxt,
  };

  return <Sc01b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

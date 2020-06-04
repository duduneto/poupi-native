// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import Sc01d, { ListView } from './Sc01d_v';
import { useCRUD, useRouter, useToggle } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Fn01d() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  const [sttAddEmail, setAddEmail] = React.useState('');
  const scContent = useSelector(state => state.rdContent[1].sc01d);
  const arrEmails = useSelector(state => state.rdPermissionList);
  const { callUpdate } = useCRUD();
  const callRouter = useRouter();
  const [sttValues, setValues] = React.useState([]);

  const [sttGambs, setGambs] = React.useState(true);

  if (arrEmails && sttGambs) {
    setValues([...arrEmails]);
    setGambs(false);
  }

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: INCLUDE
  // ---------------

  const setOnChange1 = val => setAddEmail(val);
  const btnInclude = () => {
    const lastIdx = sttValues.length - 1;
    const idSelected = sttValues[lastIdx].id;
    const idToNum = Number(idSelected) + 1;
    const idToTxt = String(idToNum);

    const newArr = [...sttValues, { id: idToTxt, email: sttAddEmail }];
    setValues([...newArr]);
    setAddEmail('');
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: LIST
  // ---------------

  const EmailComp = ({ info }) => {
    // ***************************************
    // #region :: HOOKs + VARs
    // ---------------

    // set Hooks
    const { email, idx } = info;
    const [sttEdit, setEdit] = useToggle();
    const dispatch = useDispatch();

    // ---------------
    // #endregion
    // ***************************************

    const btnEdit = () => setEdit();
    const btnExclude = () => {
      const newArr = [...sttValues];

      newArr.splice(idx, 1);
      setValues(newArr);
    };
    const setOnChange = val => {
      sttValues[idx].email = val;
      setValues(sttValues);
    };

    const infoReturn = { email, sttEdit, btnEdit, btnExclude, setOnChange };

    return ListView({ info: infoReturn });
  };

  const listEmails = () =>
    sttValues.map((item, idx) => (
      <EmailComp key={item.id} info={{ ...item, idx }} />
    ));

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const btnSave = () => {
    callUpdate('setPermissions', {
      collection: 'permissions',
      sttValues,
      actionName: 'addPermissions',
      actionValue: sttValues,
    });
  };

  const btnCancel = () => callRouter('modalitiesFilter');

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    listEmails: listEmails(),
    setOnChange1,
    sttAddEmail,
    scContent,
    btnInclude,
    btnSave,
    btnCancel,
  };

  return <Sc01d info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

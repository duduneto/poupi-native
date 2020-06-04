// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import Sc04b, { PickerItem } from './Sc04b_v';
import { useForm, useCRUD, useRouter } from '../useMorfos';
import source from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************
export default function Redirect() {
  let rdSelectedTeacher = useSelector(state => state.rdSelectedTeacher);
  let rdEditMode = useSelector(state => state.rdEditMode);
  let callRedirect = useRouter('redirect');
  let condRender = rdEditMode && rdSelectedTeacher === null;

  return condRender ? callRedirect('modalitiesFilter') : Fn04b();
}

function Fn04b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc04b);
  let arrModalities = useSelector(state => state.rdModalities);
  let rdEditMode = useSelector(state => state.rdEditMode);
  let rdSelectedTeacher = useSelector(state => state.rdSelectedTeacher);
  let [sttCondMsg, setCondMsg] = React.useState(false);
  let { callRead, callUpdate, callCreate } = useCRUD();
  let callRouter = useRouter();
  let dispatch = useDispatch();

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

  const condModalities = arrModalities ? arrModalities : [];
  const arrCateg = [
    { modalityName: { pt: 'Selecione uma categoria' } },
    ...condModalities,
  ];

  let listOptions = arrCateg.map((item, idx) => {
    let infoReturn = {
      label: item.modalityName.pt,
      value: item.docId,
    };
    return <PickerItem key={idx} info={infoReturn} />;
  });

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  let arrIpts = [
    {
      key: 'image',
      imagePicker: true,
      setOnChange: val => inputChange('image', val.target.files[0]),
    },
    {
      key: 'name',
      req: true,
      text: true,
      pHolder: scContent.name,
      setOnChange: val => inputChange('name', val),
    },
    {
      key: 'categ',
      req: true,
      picker: true,
      pHolder: scContent.categ,
      setOnChange: val => inputChange('categ', val),
    },
  ];

  let { inputChange, sttValues, sttReqsFilled, setFields } = useForm({
    arr: arrIpts,
  });

  const initFields = () => {
    if (rdEditMode) {
      setFields({
        time: rdSelectedTeacher.availableTime,
        name: rdSelectedTeacher.userName,
        categ: rdSelectedTeacher.arrCateg[0],
      });
      return () => {
        dispatch({ type: 'editMode', value: false });
      };
    }
  };

  React.useEffect(initFields, []);

  arrIpts[0].preview = sttValues.image
    ? URL.createObjectURL(sttValues.image)
    : rdEditMode
    ? rdSelectedTeacher.imgUrl
      ? rdSelectedTeacher.imgUrl
      : source
    : source;
  const compFields = {
    userName: sttValues.name,
    arrCateg: [sttValues.categ],
    infos: { jumpOnboarding: false },
    typeAccount: 'teacher',
  };

  const btnSave = () => {
    if (rdEditMode) {
      callUpdate('updateFields', {
        collection: 'users',
        editId: rdSelectedTeacher.docId,
        compFields,
        actionName: 'addTeacher',
        infoImg: sttValues.image,
        actionValue: sttValues.categ,
      });
      dispatch({ type: 'clearAction', rdName: 'rdTeachers' });
    } else {
      if (sttReqsFilled) {
        callCreate('setFields', {
          collection: 'users',
          compFields,
          actionName: 'addTeacher',
          infoImg: sttValues.image,
          actionValue: sttValues.categ,
        });
        dispatch({ type: 'clearAction', rdName: 'rdTeachers' });
      } else {
        setCondMsg(true);
      }
    }
  };

  const btnCancel = () => callRouter('teachersList');

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    listOptions,
    arrIpts,
    sttCondMsg,
    scContent,
    btnSave,
    btnCancel,
    sttValues,
    // toSignIn
  };

  return <Sc04b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

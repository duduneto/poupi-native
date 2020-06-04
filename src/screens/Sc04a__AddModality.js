// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import Sc04a from './Sc04a_v';
import { useForm, useCRUD, useRouter, useToggle } from '../useMorfos';
import source from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************
export default function Redirect() {
  let rdPermissionAdm = useSelector(state => state.rdPermissionAdm);
  let callRedirect = useRouter('redirect');
  let condRender = rdPermissionAdm !== true;

  return condRender ? callRedirect('modalitiesFilter') : Fn04a();
}

function Fn04a() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  let [sttCondMsg, setCondMsg] = React.useState(false);
  let scContent = useSelector(state => state.rdContent[1].sc04a);
  let rdEditFields = useSelector(state => state.rdEditFields);
  let editLabel = rdEditFields && rdEditFields.modalityName.pt;
  let { callCreate, callUpdate, callDelete } = useCRUD();
  let callRouter = useRouter();
  let dispatch = useDispatch();
  let [sttToggle, setToggle] = useToggle();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------
  //--- const example = () => {}
  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const arrIpts = [
    {
      key: 'image',
      imagePicker: true,
      pHolder: rdEditFields ? scContent.editName : scContent.name,
      setOnChange: val => inputChange('image', val.target.files[0]),
    },
    {
      key: 'pt',
      req: true,
      txt: true,
      pHolder: rdEditFields ? scContent.editName : scContent.name,
      setOnChange: val => inputChange('pt', val),
    },
  ];

  const { inputChange, sttValues, sttReqsFilled } = useForm({
    arr: arrIpts,
  });

  const condPreview = sttValues.image
    ? URL.createObjectURL(sttValues.image)
    : source;
  arrIpts[0].preview = sttValues.image
    ? condPreview
    : rdEditFields && rdEditFields.imgUrl
    ? rdEditFields.imgUrl
    : condPreview;

  const compFields = {
    modalityName: { pt: sttValues.pt },
  };

  const btnSave = () => {
    if (sttReqsFilled) {
      // EDITAR
      if (rdEditFields) {
        callUpdate('updateFields', {
          collection: 'categories',
          editId: rdEditFields.docId,
          infoImg: sttValues.image,
          compFields,
          actionName: 'addModalities',
        });
        dispatch({ type: 'clearAction', rdName: 'rdModalities' });
      } else {
        callCreate('setFields', {
          collection: 'categories',
          compFields,
          infoImg: sttValues.image,
          actionName: 'addModalities',
        });
        dispatch({ type: 'clearAction', rdName: 'rdModalities' });
      }

      // FIM DO EDITAR
    } else {
      setCondMsg(true);
    }
  };

  const btnCancel = () => {
    dispatch({ type: 'clearAction', rdName: 'rdEditFields' });
    callRouter('modalitiesFilter');
  };

  const btnOptions = () => {
    setToggle();
  };

  const btnExclude = () => {
    setToggle();
    callDelete('deleteModality', {
      collection: 'categories',
      editId: rdEditFields.docId,
    });
    dispatch({ type: 'clearAction', rdName: 'rdModalities' });
    callRouter('modalitiesFilter');
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    rdEditFields,
    editLabel,
    arrIpts,
    sttCondMsg,
    sttToggle,
    scContent,
    btnSave,
    btnCancel,
    btnExclude,
    btnOptions,
    // condThumbnail,
  };

  return <Sc04a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

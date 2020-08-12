// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import Sc05a, { PickerItem, ActionBtns } from './Sc05a_v';
import {
  useForm,
  useCRUD,
  useRouter,
  UseLoader,
  useTimeMask,
} from '../useMorfos';

// ---------------
// #endregion
// ***************************************
export default function Redirect() {
  let rdSchedulePf = useSelector(state => state.rdSchedulePf);
  let callRedirect = useRouter('redirect');
  let condRender = rdSchedulePf === undefined;

  return condRender ? callRedirect('modalitiesFilter') : Fn04b();
}

function Fn04b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc05a);
  let { timeMask } = useTimeMask();
  let arrCateg = useSelector(state => state.rdModalities);
  let rdSelectedTeacher = useSelector(state => state.rdSelectedTeacher);
  let rdSchedulePf = useSelector(state => state.rdSchedulePf);
  let rdEditMode = useSelector(state => state.rdEditMode);
  let addScheduledClassPending = useSelector(
    state => state.asyncMsgs.addScheduledClassPending,
  );
  let [sttCondMsg, setCondMsg] = React.useState(false);
  let [inputDateErrorMsg, setInputDateErrorMsg] = React.useState('');
  let [inputTimeErrorMsg, setInputTimeErrorMsg] = React.useState('');
  let { callRead, callUpdate, callCreate } = useCRUD();
  let callRouter = useRouter();
  let dispatch = useDispatch();

  // let scContent = rdContent.sc00;

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

  let listOptions =
    arrCateg &&
    arrCateg.map((item, idx) => {
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

  const stringToTimeStamp = (dateString, timeString) => {
    let arrayDate = dateString.split('/');
    const day = arrayDate[0];
    const month = arrayDate[1] - 1;
    const fullYear = arrayDate[2];

    let hour;
    let time;

    if (timeString) {
      const arrayTime = timeString.split(':');
      hour = arrayTime[0];
      time = arrayTime[1];
    }

    /* prettier-ignore */
    const date = timeString ? new Date(fullYear, month, day, hour, time) : new Date(fullYear, month, day);
    return isNaN(date.getTime()) ? false : date;
  };

  const maskdate = v => {
    v = v.substring(0, 10);
    v = v.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');
    v = v.replace(/(\d{2})(\d)/, '$1/$2');
    v = v.replace(/(\d{2})(\d{2})$/, '$1$2');
    return v;
  };
  const masktime = v => {
    v = v.substring(0, 5);
    v = v.replace(/\D/g, '');
    v = v.replace(/(\d{2})(\d)/, '$1:$2');
    return v;
  };

  let arrIpts = [
    {
      key: 'date',
      req: true,
      text: true,
      pHolder: scContent.date,
      errorMsg: inputDateErrorMsg,
      setOnChange: val => inputChangeDateAndCheck(val, inputChange),
    },
    {
      key: 'time',
      req: true,
      text: true,
      disabled: inputDateErrorMsg !== false,
      pHolder: scContent.time,
      errorMsg: inputTimeErrorMsg,
      setOnChange: val => inputChangeTimeAndCheck(val, inputChange),
    },
    {
      key: 'url',
      req: true,
      text: true,
      pHolder: scContent.url,
      setOnChange: val => inputChange('url', val),
    },
  ];

  let { inputChange, sttValues, sttReqsFilled, setFields } = useForm({
    arr: arrIpts,
  });

  const initFields = () => {
    if (rdEditMode) {
      setInputDateErrorMsg(false);
      setInputTimeErrorMsg(false);
      setFields({
        date: timeMask(rdSchedulePf.scheduledAt),
        time: timeMask(rdSchedulePf.scheduledAt, 'hh:mm'),
        url: rdSchedulePf.url,
      });
      return () => {
        dispatch({ type: 'editMode', value: false });
      };
    }
  };

  React.useEffect(initFields, []);

  const checkValidDate = (value, time, setState) => {
    const _setState = setState || setInputDateErrorMsg;
    const now = new Date();
    const stringDate = value;
    const valueDate = stringToTimeStamp(stringDate, time || '23:59');
    if (valueDate) {
      if (now.getTime() < valueDate.getTime()) {
        _setState(false);
      } else {
        _setState(scContent.oldDateError);
      }
    } else {
      _setState(scContent.invalidDateError);
    }
  };

  const inputChangeDateAndCheck = (val, _inputChange) => {
    const maskedValue = maskdate(val);
    let dateRegex = new RegExp(
      /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i,
    );
    if (dateRegex.test(maskedValue)) {
      checkValidDate(maskedValue, sttValues && sttValues.time);
    } else {
      setInputDateErrorMsg(scContent.invalidDateError);
    }
    inputChange('date', maskedValue);
  };

  const inputChangeTimeAndCheck = (val, _inputChange) => {
    const timeRegex = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/i);
    const maskedValue = masktime(val);
    if (timeRegex.test(maskedValue)) {
      setInputTimeErrorMsg(false);
      checkValidDate(sttValues.date, maskedValue, setInputTimeErrorMsg);
    } else {
      setInputTimeErrorMsg(scContent.invalidTimeError);
    }
    inputChange('time', maskedValue);
  };

  const compFields = {
    teacherId: rdSelectedTeacher && rdSelectedTeacher.docId,
    students: [],
    url: sttValues.url,
    scheduledAt:
      sttValues.date &&
      sttValues.time &&
      stringToTimeStamp(sttValues.date, sttValues.time),
  };

  const btnSave = () => {
    if (sttReqsFilled) {
      if (rdEditMode) {
        callUpdate('updateFields', {
          collection: 'schedules',
          editId: rdSchedulePf.docId,
          compFields,
          actionName: 'addScheduledClass',
        });
        dispatch({ type: 'clearAction', rdName: 'rdScheduledClasses' });
      } else {
        callCreate('setFields', {
          collection: 'schedules',
          compFields,
          actionName: 'addScheduledClass',
        });
        dispatch({ type: 'clearAction', rdName: 'rdScheduledClasses' });
      }
    } else {
      setCondMsg(true);
    }
  };

  const ableSaveBtn =
    inputDateErrorMsg === false && inputTimeErrorMsg === false;

  const btnCancel = () => callRouter('teachersList');

  const actionBtns = () => {
    if (addScheduledClassPending) {
      return <UseLoader size="large" />;
    } else {
      return (
        <ActionBtns
          ableSaveBtn={!ableSaveBtn}
          btnSave={btnSave}
          btnSaveTitle={scContent.save}
          btnCancel={btnCancel}
          btnCancelTitle={scContent.cancel}
        />
      );
    }
  };

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
    actionBtns: actionBtns(),
    addScheduledClassPending,
    // toSignIn
  };

  return <Sc05a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

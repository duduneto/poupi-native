// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { Linking } from 'react-native';
import { useSelector } from 'react-redux';

// import Internals
import Sc06a, { ScheduledItem } from './Sc06a_v';
import { useRouter, useCRUD, useTimeMask } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Redirect() {
  let rdSchedulePf = useSelector(state => state.rdSchedulePf);
  let callRedirect = useRouter('redirect');
  let condRender = rdSchedulePf === null;

  return condRender ? callRedirect('modalitiesFilter') : Fn03b();
}

function Fn03b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { callRead, callUpdate } = useCRUD();
  let { timeMask, weekMask } = useTimeMask();
  let scContent = useSelector(state => state.rdContent[1].sc06a);
  let rdSchedulePf = useSelector(state => state.rdSchedulePf);
  let rdMySubscribedClasses = useSelector(state => state.rdMySubscribedClasses);
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  let subscribeUserPending = useSelector(
    state => state.asyncMsgs.subscribeUserPending,
  );
  let rdScheduledClassStudentList = useSelector(
    state => state.rdScheduledClassStudentList,
  );
  const isAdm = useSelector(state => state.rdPermissionAdm);

  // let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('scheduledClassStudentsList', rdSchedulePf.students);
  };
  React.useEffect(initList, []);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const listSubscribedStudents = () => {
    if (
      !!rdScheduledClassStudentList &&
      rdScheduledClassStudentList.length > 0
    ) {
      return rdScheduledClassStudentList.map((item, idx) => {
        const infoMap = {
          ...item,
        };
        return <ScheduledItem key={idx} info={infoMap} />;
      });
    } else {
      return <></>;
    }
  };

  const subscribeUser = () => {
    callUpdate('setSubscribedUser', {
      docId: rdSchedulePf.docId,
      userId: rdAuthUser.docId,
    });
  };

  const unsubscribeUser = () => {
    callUpdate('setUnsubscribedUser', {
      docId: rdSchedulePf.docId,
      userId: rdAuthUser.docId,
    });
  };

  const now = new Date();
  const overTimeDisabledBtn =
    (rdSchedulePf.scheduledAt.seconds - now.getTime() / 1000) / 3600 <= 2;
  const hasRdAuthUserIdOnSubscribeList = rdSchedulePf.students.some(
    userId => userId === rdAuthUser.docId,
  );

  const openLink = () => {
    Linking.openURL(rdSchedulePf.url);
  };

  const generateDateCode = _date => {
    return `${_date.getFullYear()}${_date.getMonth()}${_date.getDate()}${_date.getHours()}${_date.getMinutes()}`;
  };

  const checkCompatibleSubscribedClassTime = () => {
    const currentScheduleClassDate = new Date(rdSchedulePf.scheduledAt * 1000);
    const currentScheduleDateCode = generateDateCode(currentScheduleClassDate);
    return rdMySubscribedClasses
      .filter(sClass => sClass.docId !== rdSchedulePf.docId)
      .some(_class => {
        return (
          generateDateCode(new Date(_class.scheduledAt * 1000)) ===
          currentScheduleDateCode
        );
      });
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    isAdm,
    scContent,
    listSubscribedStudents: listSubscribedStudents(),
    // subscribeBtn: subscribeBtn(),
    overTimeDisabledBtn,
    subscribeUserPending,
    subscribeUser,
    unsubscribeUser,
    hasRdAuthUserIdOnSubscribeList,
    checkCompatibleSubscribedClassTime: checkCompatibleSubscribedClassTime(),
    url: rdSchedulePf.url,
    openLink,
    // toSignIn
  };

  return <Sc06a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

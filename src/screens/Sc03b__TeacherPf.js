// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import Internals
import Sc03b, { ScheduledItem, DeleteAccountBtn, EmptyMsg } from './Sc03b_v';
import { useRouter, useCRUD, useTimeMask } from '../useMorfos';
import defaultImg from '../images/default.jpg';

// ---------------
// #endregion
// ***************************************

export default function Redirect() {
  let rdSelectedTeacher = useSelector(state => state.rdSelectedTeacher);
  let callRedirect = useRouter('redirect');
  let condRender = rdSelectedTeacher === null;

  return condRender ? callRedirect('modalitiesFilter') : Fn03b();
}

function Fn03b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { callRead } = useCRUD();
  let dispatch = useDispatch();
  let { timeMask, weekMask } = useTimeMask();
  let callRouter = useRouter();
  let scContent = useSelector(state => state.rdContent[1].sc03b);
  let weekDays = useSelector(state => state.rdContent[1].weekDays);
  let rdSelectedTeacher = useSelector(state => state.rdSelectedTeacher);
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  let rdScheduledClasses = useSelector(state => state.rdScheduledClasses);
  const isAdm = useSelector(state => state.rdPermissionAdm);

  // let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('scheduledClassesList', rdSelectedTeacher.docId);
    callRead('mySubscribedClasses', rdAuthUser.docId);
  };
  React.useEffect(initList, []);

  let { userName, email, imgUrl } = rdSelectedTeacher;
  let source = imgUrl;
  let condThumbnail = !source ? defaultImg : source;

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const goToSchedulePf = item => {
    // changeRd({ rdName: 'rdSchedulePf', value: item });
    dispatch({ type: 'rdSchedulePf', value: item });
    callRouter('schedulePf');
  };

  const toEditSchedule = item => {
    dispatch({ type: 'rdSchedulePf', value: item });
    dispatch({ type: 'editMode', value: true });
    callRouter('addScheduledClass');
  };

  // ORDENANDO POR DATA (Ver o padrao pra ordenacao ao fazer o crud)
  // VER PADRAO
  const orderedRdScheduledClasses =
    rdScheduledClasses &&
    rdScheduledClasses
      .filter(
        _class =>
          new Date(_class.scheduledAt.seconds * 1000) > new Date().getTime(),
      )
      .sort((prevSchedule, nextSchedule) =>
        prevSchedule.scheduledAt.seconds > nextSchedule.scheduledAt.seconds
          ? 1
          : -1,
      );

  const listSchedule = () => {
    if (!!orderedRdScheduledClasses && orderedRdScheduledClasses.length > 0) {
      return orderedRdScheduledClasses.map((item, idx) => {
        let scheduleInformations = {
          thisWeekDay: weekDays[weekMask(item.scheduledAt)],
          scheduleDate: timeMask(item.scheduledAt),
          scheduleTime: timeMask(item.scheduledAt, 'hh:mm'),
        };
        const infoMap = {
          ...item,
          isAdm,
          ...scheduleInformations,
        };
        return (
          <ScheduledItem
            key={idx}
            info={infoMap}
            goTo={() => goToSchedulePf(item)}
            toEdit={() => toEditSchedule(item)}
          />
        );
      });
    } else {
      return <EmptyMsg title={scContent.emptyMsg} />;
    }
  };

  const toEdit = () => {
    dispatch({ type: 'editMode', value: true });
    callRouter('addTeacher');
  };

  const deleteAccountBtn = () => {
    return (
      isAdm && (
        <DeleteAccountBtn
          title={scContent.exclude}
          onPress={() => console.log('Excluindo')}
        />
      )
    );
  };

  const event = () => {};

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    condThumbnail,
    event,
    userName,
    email,
    isAdm,
    imgUrl,
    scContent,
    listSchedule: listSchedule(),
    deleteAccountBtn: deleteAccountBtn(),
    toEdit,
    // toSignIn
  };

  return <Sc03b info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

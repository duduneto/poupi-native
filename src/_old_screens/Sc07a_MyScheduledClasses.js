// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
import Sc07a, { ScheduledItem, EmptyMsg } from './Sc07a_v';
import { useRouter, useCRUD, useTimeMask } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Redirect() {
  let rdMySubscribedClasses = useSelector(state => state.rdMySubscribedClasses);
  let callRedirect = useRouter('redirect');
  let condRender = rdMySubscribedClasses === null;

  return false ? callRedirect('modalitiesFilter') : Fn03b();
}

function Fn03b() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let { callRead, callUpdate } = useCRUD();
  let { timeMask, weekMask } = useTimeMask();
  let scContent = useSelector(state => state.rdContent[1].sc07a);
  let weekDays = useSelector(state => state.rdContent[1].weekDays);
  let rdMySubscribedClasses = useSelector(state => state.rdMySubscribedClasses);
  let setUserSubscribedClassesPending = useSelector(
    state => state.asyncMsgs.setUserSubscribedClassesPending,
  );
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  const isAdm = useSelector(state => state.rdPermissionAdm);

  // let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  const initList = () => {
    callRead('mySubscribedClasses', rdAuthUser.docId);
  };
  React.useEffect(initList, []);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  const listSchedule = () => {
    if (!!rdMySubscribedClasses && rdMySubscribedClasses.length > 0) {
      // ORDENANDO POR DATA (Ver o padrao pra ordenacao ao fazer o crud)
      // VER PADRAO
      const orderedRdMySubscribedClasses = rdMySubscribedClasses
        .filter(
          _class =>
            new Date(_class.scheduledAt.seconds * 1000) > new Date().getTime(),
        )
        .sort((prevSchedule, nextSchedule) =>
          prevSchedule.scheduledAt.seconds > nextSchedule.scheduledAt.seconds
            ? 1
            : -1,
        );
      if (orderedRdMySubscribedClasses.length > 0) {
        return orderedRdMySubscribedClasses.map((item, idx) => {
          let scheduleInformations = {
            thisWeekDay: weekDays[weekMask(item.scheduledAt)],
            scheduleDate: timeMask(item.scheduledAt),
            scheduleTime: timeMask(item.scheduledAt, 'hh:mm'),
          };
          const infoMap = {
            ...item,
            ...scheduleInformations,
          };
          return <ScheduledItem key={idx} info={infoMap} />;
        });
      } else {
        return <EmptyMsg title={scContent.emptyMsg} />;
      }
    } else {
      return <EmptyMsg title={scContent.emptyMsg} />;
    }
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
    listSchedule: listSchedule(),
    setUserSubscribedClassesPending,
    // toSignIn
  };

  return <Sc07a info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

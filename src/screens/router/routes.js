// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
// import AllApp from '../AllApp';
import '../../config/styles.css';
import { useRouter, useCRUD } from '../../useMorfos';
import Cp01 from '../components/Cp01__Nav';
import Sc00b from '../Sc00b__TempUser';
import Sc01a from '../Sc01a__SignIn';
import Sc01b from '../Sc01b__Terms';
import Sc01c from '../Sc01c__Onboarding';
import Sc01d from '../Sc01d__Permissions';
import Sc02a from '../Sc02a__ModalitiesFilter';
import Sc02b from '../Sc02b__TeachersList';
import Sc02c from '../Sc02c__MySchedulesList';
import Sc03a from '../Sc03a__MyPf';
import Sc03b from '../Sc03b__TeacherPf';
import Sc04a from '../Sc04a__AddModality';
import Sc04b from '../Sc04b__AddTeacher';
import Sc05a from '../Sc05a_AddScheduledClass';
import Sc06a from '../Sc06a_SchedulePf';
import Sc07a from '../Sc07a_MyScheduledClasses';

// ----------- Temp Component Groups

const Web = ({ children }) => {
  // console.log('RENDER => Web View');

  return (
    <div className="allView">
      <div className="centerView">{children}</div>
    </div>
  );
};

const Private = ({ children }) => {
  // console.log('RENDER => Private');

  // -------- HOOKs + VARs
  let { callRead } = useCRUD();
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  let callRouter = useRouter();

  callRead('permissionsList');

  if (!rdAuthUser) {
    callRouter('signin');
  }

  return <Web>{children}</Web>;
};

// ----------- Groups

const gp = {
  pubNav: [Web, Cp01],
  privNav: [Private, Cp01],
};

// ----------- Routes

const routes = {
  tempUser: {
    comp: Sc00b,
    group: [...gp.pubNav],
    groupProps: {
      type: 'short',
      icon: 'left',
      back: 'signin',
    },
  },
  signin: { comp: Sc01a },
  terms: {
    comp: Sc01b,
    group: [...gp.pubNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'signin',
    },
  },
  onboarding: {
    comp: Sc01c,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
    },
  },
  permissions: {
    comp: Sc01d,
    group: [...gp.privNav],
    groupProps: {
      type: 'short',
      icon: 'left',
      back: 'modalitiesFilter',
    },
  },
  modalitiesFilter: {
    comp: Sc02a,
    group: [...gp.privNav],
    groupProps: {
      fab: 'addModality',
      type: 'short',
      icon: 'menu',
    },
  },
  teachersList: {
    comp: Sc02b,
    group: [...gp.privNav],
    groupProps: {
      fab: 'addTeacher',
      type: 'short',
      icon: 'left',
      back: 'modalitiesFilter',
    },
  },
  mySchedules: {
    comp: Sc02c,
    group: [...gp.privNav],
    groupProps: {
      type: 'short',
      icon: 'left',
      back: 'myPf',
    },
  },
  myPf: {
    comp: Sc03a,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'menu',
    },
  },
  teacherPf: {
    comp: Sc03b,
    group: [...gp.privNav],
    groupProps: {
      fab: 'addScheduledClass',
      type: 'long',
      icon: 'left',
      back: 'teachersList',
    },
  },
  addModality: {
    comp: Sc04a,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'modalitiesFilter',
    },
  },
  addTeacher: {
    comp: Sc04b,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'teachersList',
    },
  },
  addScheduledClass: {
    comp: Sc05a,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'teacherPf',
    },
  },
  schedulePf: {
    comp: Sc06a,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'teacherPf',
    },
  },
  myScheduledClasses: {
    comp: Sc07a,
    group: [...gp.privNav],
    groupProps: {
      type: 'long',
      icon: 'left',
      back: 'modalitiesFilter',
    },
  },
};

export default routes;

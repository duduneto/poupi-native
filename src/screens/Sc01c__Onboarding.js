// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';
// import {useDispatch} from 'react-redux';

// import Internals
import Sc01c, { ItemStep, ItemDot } from './Sc01c_v';
import { useCRUD, useRouter, UseLoader } from '../useMorfos';

// ---------------
// #endregion
// ***************************************

export default function Redirect() {
  let jumpOnboarding = useSelector(
    state => state.rdAuthUser.infos.jumpOnboarding,
  );
  let callRouter = useRouter();
  let condRender = jumpOnboarding === true;
  condRender && callRouter('modalitiesFilter');

  return condRender ? <UseLoader /> : Fn01c();
}

function Fn01c() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let scContent = useSelector(state => state.rdContent[1].sc01c);
  let rdAuthUser = useSelector(state => state.rdAuthUser);
  const [sttOption, setOption] = React.useState(1);
  let { callUpdate } = useCRUD();
  let callRouter = useRouter();
  //   let dispatch = useDispatch();

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let infoItemStep = {
    step1: {
      step: 1,
      img: 'worker',
      title: 'Bem vindo',
      txt:
        'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary',
    },
    step2: {
      step: 2,
      img: 'image',
      title: 'Detalhes do App',
      txt: 'combined with a handful of model sentence structures',
    },
    step3: {
      step: 3,
      img: 'worker',
      title: 'Pronto pra Começar?',
      txt: 'Aproveite as vantagens desse app...',
    },
  };

  let selectedItem = () => {
    let step = infoItemStep['step' + sttOption];

    let arrDots = [1, 2, 3];

    let mapDotItems = arrDots.map(item => {
      let condStlActive = (stlItem, stlActive, stlInactive) => {
        let condActive = stlItem === sttOption;
        return condActive ? stlActive : stlInactive;
      };

      let infoReturn = {
        item,
        condStlActive,
      };

      return <ItemDot info={infoReturn} />;
    });

    let infoReturn = {
      img: step.img,
      title: step.title,
      txt: step.txt,
      mapDotItems,
    };

    return <ItemStep info={infoReturn} />;
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: BUTTONs + OTHERs
  // ---------------

  let nextStep = () => (sttOption < 3 ? setOption(sttOption + 1) : setFinish());
  let setFinish = () => {
    callUpdate('jumpOnboarding', { userId: rdAuthUser.docId });
    callRouter('modalitiesFilter');
  };

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: RETURNs
  // ---------------

  let infoReturn = {
    scContent,
    selectedItem,
    sttOption,
    nextStep,
  };

  return <Sc01c info={infoReturn} />;

  // ---------------
  // #endregion
  // ***************************************
}

// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import {useSelector} from 'react-redux';
import {Platform} from 'react-native';

// import Internals
import Cp01 from './components/Cp01__Nav';
import Sc01a from './Sc01a__SignIn';
import Sc01b from './Sc01b__Terms';
import Sc01c from './Sc01c__Onboarding';
import Sc02a from './Sc02a__ItemsList';
import Sc03a from './Sc03a__MyPf';
import Sc03b from './Sc03b__ItemPf';
import Sc04a from './Sc04a__AddItem';

import Sc404 from './Sc_404';
import {useRouter, useChangeRd} from '../useMorfos';

// ---------------
// #endregion
// ***************************************

let callRoutes = (mainRoute, ClearStorage) => {
  const configRoutes = [
    {name: 'signin', render: <Sc01a />, nav: false},
    // public
    {
      name: 'terms',
      render: <Sc01b />,
      nav: true,
      title: 'Termos de Uso',
      type: 'long',
      icon: 'left',
      back: 'signin',
    },
    {
      name: 'onboarding',
      render: <Sc01c />,
      nav: true,
      title: 'Bem Vindo',
      type: 'long',
    },

    // private
    {
      name: 'itemsList',
      render: <Sc02a />,
      nav: true,
      fab: 'addItem',
      title: 'Lista de Items',
      type: 'short',
      icon: 'menu',
    },
    {
      name: 'myProfile',
      render: <Sc03a />,
      nav: true,
      title: 'Meu Perfil',
      type: 'long',
      icon: 'menu',
    },
    {
      name: 'itemProfile',
      render: <Sc03b />,
      nav: true,
      title: 'Perfil do Item',
      type: 'long',
      icon: 'left',
      back: 'itemsList',
    },
    {
      name: 'addItem',
      render: <Sc04a />,
      nav: true,
      title: 'Adicionar Item',
      type: 'long',
      icon: 'left',
      back: 'itemsList',
    },

    // // Utils / Feedback
    {name: 'error', render: <Sc404 />, nav: false},
    {
      name: 'clear',
      render: <ClearStorage />,
      nav: true,
      type: 'long',
      icon: 'back',
    },
  ];

  const objRt = configRoutes.find(item => item.name === mainRoute);
  let compMount = () => {
    const nav = {
      [objRt.name]: (
        <Cp01
          type={objRt.type}
          icon={objRt.icon}
          title={objRt.title}
          back={objRt.back}
          fab={objRt.fab}>
          {objRt.render}
        </Cp01>
      ),
    };
    const noNav = {
      [objRt.name]: objRt.render,
    };

    return objRt.nav ? nav : noNav;
  };

  let routes = {
    ...compMount(),
  };

  let condError = routes[mainRoute] === undefined;
  let goto = condError ? 'error' : mainRoute;
  let selectedRoute = routes[goto];

  return selectedRoute;
};

export default function InitRoutes() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks
  let callRouter = useRouter();
  let mainRoute = useSelector(state => state.rdRoute);
  let condWeb = Platform.OS === 'web';
  React.useEffect(() => condWeb && initGotoUrl(), [condWeb, initGotoUrl]);

  // ---------------
  // #endregion
  // ***************************************

  // ***************************************
  // #region :: FUNCTIONs
  // ---------------

  let initGotoUrl = () => {
    let pathName = window.location.pathname.split('/')[1];
    let gotoUrl = pathName === '' ? 'signin' : pathName;
    window.history.pushState(null, '', '/' + gotoUrl);

    if (mainRoute !== gotoUrl) {
      callRouter(gotoUrl);
    }
  };

  let ClearStorage = () => {
    // let callRouter = useRouter();
    let changeRd = useChangeRd();
    // FALTA: ver como testar o storage no nativo lá no SYNC (add pack nativo)
    changeRd({clearAll: true});
    callRouter('signin');
    return <></>;
  };

  // force clear url

  if (condWeb) {
    let pathName = window.location.pathname.split('/')[1];
    let condClear = pathName === 'clear';
    mainRoute = condClear ? 'clear' : mainRoute;
  }

  // ---------------
  // #endregion
  // ***************************************

  return callRoutes(mainRoute, ClearStorage);
}

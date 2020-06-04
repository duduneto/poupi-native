// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';
import { Platform } from 'react-native';

// import Internals
import prjRoutes from './routes';

import AllApp from '../AllApp';
import Sc404 from '../Sc_404';
import { useRouter, useCRUD } from '../../useMorfos';

// ---------------
// #endregion
// ***************************************

const CallRoutes = mainRoute => {
  let rdContent = useSelector(state => state.rdContent);
  const routes = {
    ...prjRoutes,
    error: { comp: { Sc404 } },
    clear: { comp: { ClearStorage } },
  };

  function ClearStorage() {
    let { callUpdate } = useCRUD();
    callUpdate('clearAll');

    let callRouter = useRouter();
    callRouter('signin');
    return <AllApp />;
  }

  const condError = routes[mainRoute] === undefined;
  const goto = condError ? 'error' : mainRoute;
  const selectedRoute = routes[goto];
  const { groupProps, comp } = selectedRoute;
  const title = rdContent[1].cp01[mainRoute];
  const newGpProps = { ...groupProps, title };

  const renderRoute = () => {
    const condGroup = selectedRoute.group ?? [];
    const arrComps = [...condGroup, comp];

    let CompPath;
    const renderPaths = (item, idx) => {
      const condProps = idx === 1 && newGpProps;

      const renderComp = ({ Comp, children, props }) => (
        <Comp {...props}>{children}</Comp>
      );

      CompPath = renderComp({
        Comp: item,
        children: CompPath,
        props: condProps,
      });
    };

    arrComps.reverse().map(renderPaths);

    return CompPath;
  };

  return renderRoute();
};

export default function InitRoutes() {
  // ***************************************
  // #region :: HOOKs + VARs
  // ---------------

  // set Hooks

  let callRouter = useRouter();
  let mainRoute = useSelector(state => state.rdRoute);
  let condWeb = Platform.OS === 'web';

  let initGotoUrl = () => {
    if (condWeb) {
      let pathName = window.location.pathname.split('/')[1];
      let gotoUrl = pathName === '' ? 'modalitiesFilter' : pathName;
      window.history.pushState(null, '', '/' + gotoUrl);

      if (mainRoute !== gotoUrl) {
        callRouter(gotoUrl);
      }
    }
  };
  React.useEffect(initGotoUrl, []);

  // ---------------
  // #endregion
  // ***************************************

  return CallRoutes(mainRoute);
}

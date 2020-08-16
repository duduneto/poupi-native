// ----------- import Packs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------- import Internals
// import CurrSC from '../../project/screens/A2_Terms';
import CurrSC from '../../project/screens/A1_Signin';
import useListenResize from './useListenResize';
import { UseInitData } from '../../useMorfos';
import { setPath } from '../../useMorfos/utils';

// ----------- set All App Screen
export default () => {
  // ----------- set Init Routes
  const initRoutes = {
    selSttCond: `sttRoute.routesInfo`,
    reducerName: `base_InitRoutes`,
  };

  // ----------- set Return
  return (
    <UseInitData info={initRoutes}>
      <SelectedRoute />
    </UseInitData>
  );
};

function SelectedRoute() {
  // ----------- set Selectors
  const selRouteData = stt => setPath(stt, `sttRoute`);
  const routeData = useSelector(selRouteData);

  // ----------- set Hooks
  useListenResize();

  // ----------- set Route Component
  const { routesInfo, path } = routeData;
  const currModule = routesInfo[path].folderPath;
  const CompRoute = require(`../../project/screens/${currModule}`).default;

  // ----------- set Return
  return <CompRoute />;
}

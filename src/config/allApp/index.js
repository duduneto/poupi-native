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

  // ----------- set Current Route
  const { routesInfo, path } = routeData;
  const currModule = routesInfo[path].folderPath;
  const CompRoute = require(`../../project/screens/${currModule}`).default;

  // ----------- set Current Group
  const objComps = require(`./routeGroups`).default;
  const currInfo = routesInfo[path].groupSc;
  const arrCurrGroup = objComps[currInfo];

  // ----------- set Group Components
  const newArr = [...arrCurrGroup, CompRoute];
  let groupComp;
  const renderAll = item => {
    const renderComp = ({ Comp, children }) => <Comp>{children}</Comp>;

    groupComp = renderComp({
      Comp: item,
      children: groupComp,
    });
  };
  newArr.reverse().map(renderAll);

  // ----------- set Return
  return groupComp;
}

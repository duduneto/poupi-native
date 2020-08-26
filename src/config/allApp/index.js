// ----------- import Packs
import React from 'react';

// ---------- import Internals
import useListenResize from './useListenResize';
import { UseInitData, useData } from '../../useMorfos';

// ----------- set All App Screen
export default () => {
  // ----------- set Return
  return (
    <UseInitData reducer={'base_InitRoutes'}>
      <SelectedRoute />
    </UseInitData>
  );
};

function SelectedRoute() {
  // ----------- set Selectors
  const routeData = useData(`sttRoute`);

  // ----------- set Hooks
  useListenResize();

  // ----------- set Current Screen
  const { routesInfo, path } = routeData;
  const currModule = routesInfo[path].folderPath;
  const CompScreen = require(`../../project/screens/${currModule}`).default;

  // ----------- set Current Group
  const objComps = require(`./routeGroups`).default;
  const currInfo = routesInfo[path].groupSc;
  const arrCurrGroup = objComps[currInfo];

  // ----------- set Group Components
  const newArr = [...arrCurrGroup, CompScreen];
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

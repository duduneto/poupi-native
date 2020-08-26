// ----------- import Packs
import React from 'react';

// ---------- import Internals
// import { useData } from '../../useMorfos';

// ----------- set Default
export default (arrGroups, CompScreen) => {
  // ----------- set Data
  // const routeData = useData('sttRoute');
  // const { routesInfo, path } = routeData;

  // ----------- set Group + Screen
  const newArr = [...arrGroups, CompScreen];
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
};

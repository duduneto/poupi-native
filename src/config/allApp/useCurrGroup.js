// ---------- import Internals
import { useData } from '../../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('sttRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Group
  const objComps = require('./routeGroups').default;
  const currInfo = routesInfo[path].groupSc;
  const arrCurrGroup = objComps[currInfo];

  // ----------- set Return
  return arrCurrGroup;
};

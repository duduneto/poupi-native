// ---------- import Internals
import { useData } from '../../useMorfos';
import routeGroups from '../../project/allGroups/routeGroups';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('baseRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Group
  const currPath = routesInfo[path];
  const condPath = currPath ?? routesInfo['404'];
  const currInfo = condPath.groupSc;
  const arrCurrGroup = routeGroups[currInfo];

  // ----------- set Return
  return arrCurrGroup;
};

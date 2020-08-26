// ---------- import Internals
import { useData } from '../../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('sttRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Screen
  const currPath = routesInfo[path];
  const condPath = currPath ?? routesInfo['404'];
  // if (cond404) {
  //   const Comp404 = require('../../project/screens/X_404').default;
  //   return Comp404;
  // }

  const currModule = condPath.folderPath;
  const CurrScreen = require(`../../project/screens/${currModule}`).default;

  // ----------- set Return
  return CurrScreen;
};

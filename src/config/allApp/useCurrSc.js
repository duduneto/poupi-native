// ---------- import Internals
import { useData } from '../../useMorfos';
import screens from '../../project/screens';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('sttRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Screen
  const currPath = routesInfo[path];
  const condPath = currPath ?? routesInfo['404'];

  const currModule = condPath.scKey;
  const CurrScreen = screens[currModule].default;

  // ----------- set Return
  return CurrScreen;
};

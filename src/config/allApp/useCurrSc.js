// ---------- import Internals
import { useData } from '../../useMorfos';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('sttRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Screen
  const currModule = routesInfo[path].folderPath;
  const CurrScreen = require(`../../project/screens/${currModule}`).default;

  // ----------- set Return
  return CurrScreen;
};

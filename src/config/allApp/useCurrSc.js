// ---------- import Packs
import React from 'react';
import { useDispatch } from 'react-redux';

// ---------- import Internals
import { useData } from '../../useMorfos';
import screens from '../../project/screens';

// ----------- set Default
export default () => {
  // ----------- set Data
  const routeData = useData('baseRoute');
  const { routesInfo, path } = routeData;

  // ----------- set Current Screen Condition
  const currPath = routesInfo[path];
  const condCurrInfo = currPath ?? routesInfo['404'];

  // ----------- set Current Screen Info
  const dispatch = useDispatch();
  const fxScInfo = () =>
    dispatch({ type: 'base_CurrScInfo', value: condCurrInfo });
  React.useEffect(fxScInfo, [path]);

  // ----------- set Current Screen Comp
  const currModule = condCurrInfo.scKey;
  const CurrScreen = screens[currModule].default;

  // ----------- set Return
  return CurrScreen;
};

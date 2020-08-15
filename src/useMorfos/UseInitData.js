// ---------- import Packs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------- import Internals
import { UseLoader } from '../useMorfos';
import { setPath, hasData } from '../useMorfos/utils';

export default ({ children, info }) => {
  const { setSel, setAction } = info;
  const dispatch = useDispatch();
  const initData = () => {
    dispatch({ type: setAction });
  };
  React.useEffect(initData, []);
  const data = useSelector(state => setPath(state, setSel));
  const condReturn = hasData(data);

  return condReturn ? children : UseLoader({ size: 25 });
};

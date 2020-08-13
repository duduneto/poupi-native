// ---------- import Packs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------- import Internals
import { utils, UseLoader } from '../useMorfos';

export default ({ children, info }) => {
  const { setSel, setAction } = info;
  const dispatch = useDispatch();
  const initData = () => {
    dispatch({ type: setAction });
  };
  React.useEffect(initData, []);
  const data = useSelector(state => utils.setPath(state, setSel));
  const condReturn = utils.hasData(data);

  return condReturn ? children : UseLoader({ size: 25 });
};

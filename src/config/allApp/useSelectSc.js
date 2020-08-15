// ----------- import Packs
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------- import Internals
import AllSc from '../../project/screens';
import { utils } from '../../useMorfos';

// ---------- set Utils
const { setPath } = utils;

export default () => {
  // ----------- set Selectors
  const selRoutePath = stt => setPath(stt, 'rdRoute.path');
  const routePath = useSelector(selRoutePath);

  // ----------- select Screen

  // ----------- set Hooks
  const dispatch = useDispatch();
};

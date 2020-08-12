// import Packages
import React from 'react';
import Router from './router/Router';
import { useSelector } from 'react-redux';

import { useCRUD, UseLoader } from '../useMorfos';

export default () => {
  const stlLoader = [
    { flex: 1, alignItems: 'center', justifyContent: 'center' },
  ];
  let rdContent = useSelector(state => state.rdContent);
  const { callRead } = useCRUD();

  if (!rdContent) {
    callRead('readContent');
  }

  const condReturn = !rdContent ? (
    <UseLoader size="large" style={stlLoader} />
  ) : (
    <Router />
  );

  return condReturn;
};

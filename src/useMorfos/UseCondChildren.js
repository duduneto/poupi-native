// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useData } from '.';

// ----------- set Default Component
export default (dataSel = '') => {
  const COMP = ({ children }) => {
    const showValidation = useData(dataSel);
    return showValidation ? children : null;
  };
  return COMP;
};

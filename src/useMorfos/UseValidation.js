// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useData } from '.';

// ----------- set Default Component
export default ({ data, children }) => {
  const showValidation = useData(data);
  return showValidation ? children : null;
};

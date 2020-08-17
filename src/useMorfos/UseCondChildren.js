// ----------- import Packs
// import React from 'react';

// ----------- import Internals
import { useData } from '.';

// ----------- set Default Component
export default ({ children }) => {
  const showValidation = useData('D1.msgs.showValidation');
  return showValidation ? children : null;
};

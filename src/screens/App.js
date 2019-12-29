// import packages
import React from 'react';

// import internals
import { useChangeRd, useRd } from '../useMorfos';
import dbRef from '../useMorfos/dbRef.json';

export default ({ children }) => {
  // set Hooks
  let changeRd = useChangeRd();
  let { rdContent } = useRd();

  // React.useEffect(() => {
  //   changeRd("rdContent", dbRef.content.pt);
  // }, []);

  return children;
};

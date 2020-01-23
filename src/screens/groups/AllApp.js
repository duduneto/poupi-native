// import packages
import React from "react";

// import internals
import { useChangeRd, useRd, UseLoader } from "../../useMorfos";
import dbRef from "../../useMorfos/dbRef.json";

export default ({ children }) => {
  // set Hooks
  let changeRd = useChangeRd();
  let { rdContent } = useRd();

  React.useEffect(() => {
    // FALTA: Conectar Firestore + condição rdContent
    changeRd("rdContent", dbRef.content.pt);
  }, []);

  return Object.keys(rdContent).length === 0 ? <UseLoader /> : children;
};

// import packages
import React from "react";

// import internals
import { useChangeRd, useRd, UseLoader, useFbDocRd } from "../../useMorfos";
import { condRdContent } from "../services";

export default ({ children }) => {
  // set Hooks
  let changeRd = useChangeRd();
  let { rdContent } = useRd();
  const callDocRd = useFbDocRd();

  let infoPar = {
    callDocRd,
    rdContent
  };

  React.useEffect(() => {
    // FALTA: Conectar Firestore + condição rdContent
    changeRd("rdContent", condRdContent(infoPar));
  }, []);

  let size = rdContent.length === 0;

  return size ? <UseLoader /> : children;
};

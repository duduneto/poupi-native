// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
// import React from "react";

// import Internals "../../useMorfos";
import mockDb from "./mockDb.json";

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

let SetRdContentFb = info => {
  // set Call
  let infoTemp = {
    collection: "content",
    rdName: "rdContent",
    docId: "pt"
  };

  // function Call
  info.callDocRd(infoTemp);

  return info.rdContent;
};
let SetRdContentMockDb = Info => {
  let content = mockDb.content.pt;

  return content;
};

export { SetRdContentFb, SetRdContentMockDb };

// ---------------
// #endregion
// ***************************************

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
export default (info, dbFb) => {
  let readContentFb = () => {
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

  let readContentMock = () => {
    let content = mockDb.content.pt;

    return content;
  };

  return dbFb ? readContentFb() : readContentMock();
};

// ---------------
// #endregion
// ***************************************

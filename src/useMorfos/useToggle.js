// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default function useToggle(initialValue) {
  const [sttName, setToggleValue] = React.useState(initialValue);
  const toggleName = info =>
    info != null ? setToggleValue(info) : setToggleValue(!sttName);

  return [sttName, toggleName];
}

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: HOW TO USE IT
// ---------------

/*

  // set Hook
  const [sttMsg, toggleMsg] = useToggle(false);

  // state Condition
  // <Text>{sttMsg && 'Show Text'}
  // </Text>

  // button Call
  // <TouchableOpacity onPress={toggleMsg} > 
  // </TouchableOpacity>

*/

// ---------------
// #endregion
// ***************************************

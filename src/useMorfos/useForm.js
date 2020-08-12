// ***************************************
// #region :: IMPORTs
// ---------------

// import Packages
import React from 'react';
import { useSelector } from 'react-redux';

// import Internals
import { useCRUD } from '.';

// ---------------
// #endregion
// ***************************************

// ***************************************
// #region :: FUNCTION
// ---------------

export default ({ arr, rdName }) => {
  // set Hooks
  let [sttValues, setValues] = React.useState({});
  let [sttReqsFilled, setReqsFilled] = React.useState(false);
  let { callUpdate } = useCRUD();
  let rdValues = useSelector(state => state[rdName]);

  let arrReq = arr.filter(item => item.req);

  let setFields = obj => {
    setValues(obj);
  };

  let inputChange = (iptName, value) => {
    let oldVal = rdName ? rdValues : sttValues;
    let newVal = { ...oldVal, [iptName]: value };

    let objVal = {
      rdName,
      newVal,
    };
    rdName ? callUpdate('updateFields', objVal) : setValues(newVal);

    let sum = 0;
    arrReq.map(item => {
      let noSpacesItem =
        newVal[item.key] && newVal[item.key].replace(/\s+/g, '');
      let condSum = noSpacesItem && noSpacesItem !== '';
      if (condSum) {
        sum = sum + 1;
      }
      return sum;
    });

    sum === arrReq.length && setReqsFilled(true);
    sum !== arrReq.length && setReqsFilled(false);
  };

  return { inputChange, sttValues, setValues, sttReqsFilled, setFields };
};

// ---------------
// #endregion
// ***************************************

/*** HOW TO USE IT ****

  // set Hook
  let arrReqFields = ["name", "city"] // it can be empty
  const { inputChange, sttValues } = useForm({req:arrReqFields}); // State
  const { inputChange } = useForm({req:arrReqFields, rdName:"rdIptsProd"}); // Reducer

  // function Form
  let iptName = (txt) => inputChange("iptName",txt)
  let iptDesc = (txt) => inputChange("iptDesc",txt)

*/

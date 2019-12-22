// import packages
import { useDispatch } from "react-redux";

export default () => {
  let dispatch = useDispatch();
  let callRd = (info1, info2) => {
    return { type: "CHANGE_REDUCER", rdName: info1, value: info2 };
  };
  return (res1, res2) => dispatch(callRd(res1, res2));
};

/*** HOW TO USE IT *** 
  
 // set Hooks
 let changeRd = useChangeRd();
 
 // call Hook
 // changeRd("rdContent", dbRef)

 */

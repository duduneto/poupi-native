// import packages
import { useSelector } from "react-redux";

export default () => {
  return useSelector(state => state);
};

/*** HOW TO USE IT *** 
  
 // set Hooks
 let { rdContent, rdAuthUser } = useRd();

 */

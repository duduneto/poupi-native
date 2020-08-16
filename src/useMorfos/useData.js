// ----------- import Packs
import { useSelector } from 'react-redux';

// ----------- import Internals
import { setPath } from './utils';

// ----------- set Default Hooks
export default info => {
  // ----------- set Selector
  const selData = allData => setPath(allData, info);
  const dataSelected = useSelector(selData);

  // ----------- set Return
  return dataSelected;
};

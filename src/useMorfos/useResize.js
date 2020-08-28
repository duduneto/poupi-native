// ----------- import Packs
import { useSelector } from 'react-redux';
import { setPath } from './utils';

export default stl => {
  // ----------- set Selectors
  const condDesk = useSelector(stt => setPath(stt, 'sttRoute.condDeskSize'));

  // ----------- set Return
  const condStl = condDesk ? setPath(stl, 'desk') : setPath(stl, 'mob');
  const condReturn = stl === undefined ? condDesk : condStl;
  return condReturn;
};

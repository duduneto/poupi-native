// ----------- import Packs
import { useSelector } from 'react-redux';
import utils from './utils';
const { setPath } = utils;

export default stl => {
  // ----------- set Selectors
  const condDesk = useSelector(stt => setPath(stt, 'rdCondDesk'));

  // ----------- set Return
  const condStl = condDesk ? setPath(stl, 'desk') : setPath(stl, 'mob');
  const condReturn = stl === undefined ? condDesk : condStl;
  return condReturn;
};

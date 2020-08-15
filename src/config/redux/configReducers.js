// ---------- import Internals
import { utils } from '../../useMorfos';
const { mergeDeep, setPath } = utils;

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Desktop Size
    base_CondDesktop: () => {
      const pointBreak = 620;
      const condDesk = action.value >= pointBreak;

      return {
        ...state,
        rdCondDesk: condDesk,
      };
    },
  };
};

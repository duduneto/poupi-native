// ---------- import Internals
// import { mergeDeep, setPath } from '../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Desktop Size
    base_CondDesktopSize: () => {
      const pointBreak = 620;
      const condDesk = action.value >= pointBreak;

      return {
        ...state,
        rdCondDesk: condDesk,
      };
    },
  };
};

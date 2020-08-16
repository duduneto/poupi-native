// ---------- import Internals
// import {
//   firestore,
//   firebase,
//   storage,
// } from '../../../config/firebase/fbConfig';
// import { mergeDeep, setPath } from '../../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Init Content Data
    X_InitContentData: () => {
      const scContent = {
        title: 'EXAMPLE',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para o Signin',
      };

      const condData = true;

      return {
        ...state,
        X: { ...state.X, scContent, condData },
      };
    },
  };
};

// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';
// import { mergeDeep, setPath } from '../../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => ({
  // ---------- set Init Content Data
  X0_InitContentData: () => {
    const scContent = {
      title: 'Signin',
      subTitle: 'Oi Mundo!',
      description: 'Lorem Ipsum!',
      txtBtn: 'Ir para os TERMOS',
    };

    const condData = true;

    return {
      ...state,
      X0: { ...state.X0, scContent, condData },
    };
  },
});

// ---------- import Internals
// import { firestore } from '../../../config/firebase/fbConfig';
// import { mergeDeep, setPath } from '../../../useMorfos/utils';

// ---------- set Reducers
const reducers = (state, action) => ({
  // ---------- set Init Data _Name_
  B1_InitContentData: () => {
    const scContent = {
      title: 'Signin',
      subTitle: 'Oi Mundo!',
      description: 'Lorem Ipsum!',
      txtBtn: 'Ir para os TERMOS',
    };

    const condData = true;

    return {
      ...state,
      B1: { ...state.B1, scContent, condData },
    };
  },
});

// ---------- set Exports
export default reducers;

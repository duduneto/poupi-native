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
      // --- ItemList
      mktName: 'Carrefour',
      act1: 'Ver Produtos',
      act2: 'Ver Vendas',
      txtDetails:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

      // --- ItemList
      bnTitle: 'Lista de Mercados',
      bnSubTitle: 'Lorem Ipsum is simply text',
      bnAct: 'Add. Mercado',
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

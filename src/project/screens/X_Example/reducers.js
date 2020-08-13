// ---------- import Internals
import {
  firestore,
  // firebase,
  // storage
} from '../../../config/firebase/fbConfig';
import { utils } from '../../../useMorfos';

// ---------- set Utils
const {
  // mergeDeep,
  // setPath
} = utils;

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Init Name Data
    X_InitData: () => {
      const scContent = {
        title: 'Signin',
        subTitle: 'Oi Mundo!',
        description: 'Lorem Ipsum!',
        txtBtn: 'Ir para os TERMOS',
      };

      const condData = true;

      return {
        ...state,
        X: { ...state.X, scContent, condData },
      };
    },
  };
};

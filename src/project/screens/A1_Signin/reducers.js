// ---------- import Internals
import {
  firestore,
  // firebase,
  // storage
} from '../../../config/firebase/fbConfig';
import {
  mergeDeep,
  // setPath
} from '../../../useMorfos/utils';

// ---------- set Reducers
export default (state, action) => {
  return {
    // ---------- set Init Content Data
    A1_InitContentData: () => {
      const scContent = {
        title: 'GYM ONE',
        subTitle: 'Oi Mundo!',
        slogan: 'Suas aulas a qualquer hora e em qualquer lugar',
        description: 'Lorem Ipsum!!',
        enterUsing: 'Faça parte do nosso time',
        txtDisplay1: 'O Futuro do',
        txtDisplay2: 'Treinamento',
        txtDisplay3: 'Pessoal',
        txtTeam: 'Faça parte de nossa equipe',
        txtBtn1: 'ENTRE AGORA',
        txtBtn2: 'ENCONTRE UM PLANO',
        txtBtn3: 'Ir para os TERMOS',
        feat1:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        feat2:
          'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        feat3:
          'It has survived not only five centuries, but also the leap into electronic typesetting.',
      };

      const condData = true;

      return {
        ...state,
        A1: { ...state.A1, scContent, condData },
      };
    },

    // ---------- set Init Name Data
    X0_InitNameData: () => {
      const scContent = { a: '1' };

      return {
        ...state,
        X0: { ...state.X0, scContent },
      };
    },

    // ---------- set GET Name
    X0_GetName_START: () => {
      // ------ set TEMP Mock Function
      const mockFn = () => {
        action.type = action.type + '_MOCK';
        // ------ set Mock data
        const mockReturn = {
          item1: {
            id: 1,
            prop: 'mock1',
          },
          item2: {
            id: 2,
            prop: 'mock1',
          },
        };

        // ------ dispatch Mock SUCCESS
        return action.asyncDispatch({
          type: 'X0_AddName_SUCCESS',
          value: mockReturn,
        });
      };

      // ---------- set Pending to Pass
      const pendingName = `${action.type}_Pending`;

      // ---------- set Async Function
      const asyncFn = async () => {
        // ---------- set Async Call
        const dataSuccess = await firestore.collection('categories').get();

        // ---------- set Data to Show
        const arrList = [];
        dataSuccess.forEach(doc => arrList.push(doc.data()));

        // ---------- dispatch SUCCESS
        return action.asyncDispatch({
          type: 'X0_GetName_SUCCESS',
          value: arrList,
          pendingName,
        });
      };

      // ---------- dispatch ERROR
      const callAsync = () =>
        asyncFn().catch(err => {
          return action.asyncDispatch({
            type: 'ASYNC_ERROR',
            value: err.message,
            asyncName: action.type,
            pendingName,
          });
        });

      // ------ call Async Function
      const condMock = false;
      condMock ? mockFn() : callAsync();

      // ------ set Return START
      return {
        ...state,
        ...mergeDeep(state.X0, { msgs: { [pendingName]: true } }),
      };
    },

    X0_GetName_SUCCESS: () => {
      return {
        ...state,
        ...mergeDeep(state.X0, { msgs: { [action.pendingName]: false } }),
        rdName: [...action.value],
      };
    },

    // ---------- set CHANGE Name
    X0_ChangeName: () => {
      return {
        ...state,
        rdName: { ...action.value },
      };
    },
  };
};

// ***************************************
// #region :: asyncFn EXAMPLES
// ---------------

// ---------- set ADD Name
// ***** X0_AddName_START *****

/*
  
  // ---------- set Async Function
  const asyncFn = async () => {
    // ---------- set Data to Add
    const data = {
      userName: 'Pedro Silva',
      image: 'https://source.unsplash.com/200x150/?portrait&boy&1',
      infos: {
        jumpOnboarding: true,
      },
      typeAccount: 'client',
    };
  
    // ---------- set Async Call
    const refDb = firestore.collection('users').doc();
    data.docId = refDb.id;
    data.createdAt = firebase.firestore.Timestamp.now();
    const dataSuccess = await refDb.set();
  
    // ---------- dispatch SUCCESS
    return action.asyncDispatch(...);
  };
  */

// ---------- set FETCH Name
// ***** X0_FetchName_START *****

/*
  const asyncFn = async () => {
    // ---------- set Async Call
    const type = state.rdForm.announced.type;
  
    const urlBase = `https://fipeapi.appspot.com/api/1/${type}/marcas.json`;
  
    const fetchUrl = await fetch(urlBase, { method: 'get' });
    const dataSuccess = await fetchUrl.json();
  
    // ---------- dispatch SUCCESS
    return action.asyncDispatch(...);
  }
  */

// ---------------
// #endregion
// ***************************************

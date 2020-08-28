// ----------- import Packs
// import storage from '@react-native-community/async-storage';
import { persistReducer, createTransform } from 'redux-persist';

// ----------- import Internals
import condStorage from '../../condPacks/storage';
import reducers from '.';

// ----------- set Config

const pathTransform = createTransform(
  whiteItem => whiteItem,
  whiteItem => ({ path: whiteItem.path }),
  { whitelist: ['baseRoute'] },
);

const persistConfig = {
  storage: condStorage,
  key: 'root',
  whitelist: ['basePersist', 'baseRoute'],
  transforms: [pathTransform],
};

export default persistReducer(persistConfig, reducers);

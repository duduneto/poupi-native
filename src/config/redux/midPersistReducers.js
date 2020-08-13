// ----------- import Packs
// import storage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// ----------- import Internals
import condStorage from '../condPacks/storage';
import reducers from './rootReducer';

// ----------- set Config

const persistConfig = {
  storage: condStorage,
  key: 'root',
  whitelist: ['rdPersists'],
};

export default persistReducer(persistConfig, reducers);

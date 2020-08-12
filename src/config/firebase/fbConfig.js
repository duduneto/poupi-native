// import Packages
import firebase from './packs.web';

import appInfo from '../../appInfo';
const { fbWebConfig } = appInfo;
// const envConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export const fbConfig =
  !firebase.apps.length && firebase.initializeApp(fbWebConfig);

export { firebase };
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

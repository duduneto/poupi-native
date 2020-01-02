// import Packages
import firebase from './packs';

import { fbWebConfig } from '../../appInfo.json';

// const envConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export const fbConfig =
  !firebase.apps.length && firebase.initializeApp(fbWebConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

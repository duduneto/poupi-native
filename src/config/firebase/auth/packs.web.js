// import Packages
import firebase from '../packs';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const authSignOut = () => {
  return firebase.auth().signOut();
};

export const authGoogle = () => {
  return firebase.auth().signInWithPopup(googleProvider);
};

export const authFacebook = () => {
  return firebase.auth().signInWithPopup(facebookProvider);
};
/* */

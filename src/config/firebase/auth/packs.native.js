// import Packages
import firebase from './firebase';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';

export const authSignOut = () => {
  return firebase.auth().signOut();
};

export const authFacebook = async () => {
  return LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    async res => {
      if (res.isCancelled) {
        throw new Error('User cancelled the login process');
      }

      return AccessToken.getCurrentAccessToken().then(async data => {
        if (!data) {
          throw new Error('Something went wrong obtaining access token');
        }

        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken
        );

        // console.warn('|info A| data', data);

        return firebase
          .auth()
          .signInWithCredential(credential)
          .then(currentUser => {
            // console.warn('|info B| currentUser', currentUser);

            let userData = currentUser.user.providerData[0];
            let socialData = {
              facebookToken: data.token,
              facebookProvider: userData.providerId,
              facebookUserId: userData.uid
            };
            let infoSignIn = {
              ...socialData,
              userImage: userData.photoURL,
              userEmail: userData.email,
              userName: userData.displayName
            };
            // console.log("|info C| infoSignIn:", infoSignIn);
            return infoSignIn;
          });
      });
    }
  );
};

export const authGoogle = async () => {
  GoogleSignin.configure({
    webClientId:
      '16531273613-nj4983ps5tgs78sqa8i3h8eeklu3dp36.apps.googleusercontent.com'
  });

  const data = await GoogleSignin.signIn();

  const credential = firebase.auth.GoogleAuthProvider.credential(
    data.idToken,
    data.accessToken
  );

  return firebase
    .auth()
    .signInWithCredential(credential)
    .then(currentUser => {
      console.log('|info| currentUser: ', currentUser);

      let socialData = {
        googleToken: credential.token,
        googleProvider: credential.providerId,
        googleUserId: data.user.id
      };
      let infoSignIn = {
        socialData,
        userImage: data.user.photo,
        userEmail: data.user.email,
        userName: data.user.name
      };
      return infoSignIn;
    });
};

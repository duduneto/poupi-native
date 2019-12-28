// import Packages
import { firestore } from '../fbConfig';
import { authGoogle, authFacebook, authSignOut } from '../auth/packs';

export const authAll = info => {
  // console.log("TCL ***: info", info)

  let opt = info.opt;
  switch (opt) {
    case 'Google':
      return authGoogle().then(res => {
        return authFirebase(res, info);
      });

    case 'Facebook':
      return authFacebook().then(res => {
        return authFirebase(res, info);
      });

    // case 'SignOut':
    //   return authSignOut().then(res => {
    //     let authUser = null;
    //     return authUser;
    //   });

    // case 'Email':
    //   return;

    default:
      return;
  }
};

// set Collection
const dbUsers = firestore.collection('users');

const authFirebase = async (info1, info2) => {
  // try { } catch ({}) {}

  // console.log('* TCL * * *: authFirebase -> info1', info1);
  // console.log('* TCL * * *: authFirebase -> info2', info2);

  if (!info1.cancel) {
    let { userImage, userEmail, userName, socialData } = info1;

    let authUser = {
      userEmail,
      ...info2.newUser
      // userImage,
      // userName
    };

    let addData = {
      createdAt: new Date(),
      ...info2.newUser,
      ...socialData,
      ...authUser
    };

    return getDocUserData(userEmail).then(docUserData => {
      //
      if (docUserData) {
        authUser.jumpSplashScreen = docUserData.jumpSplashScreen;

        authUser = { ...docUserData };
        let docId = docUserData.id;
        authUser.docId = docId;

        let userSignins = docUserData.userSignins
          ? docUserData.userSignins
          : [];
        userSignins.push(new Date());

        dbUsers.doc(docId).update({ userSignins });
        //
      } else {
        authUser.jumpSplashScreen = false;
        authUser.participantShops = new Array();
        authUser.cpf = false;

        // add userSigns but keep authUser without it
        addData = { userSignins: [new Date()], ...addData, ...authUser };

        dbUsers.add(addData).then(res => {
          let docId = res.id;
          dbUsers.doc(docId).update({ docId: docId });
          authUser.docId = docId;
        });
        //
      }

      // console.log('| info | authFirebase => authUser:', authUser);
      return authUser;
    });
  }
};

const getDocUserData = userEmail => {
  // console.log('| info | getDocUserData => docUserData: ', docUserData);

  return dbUsers
    .where('userEmail', '==', userEmail)
    .get()
    .then(snap => {
      let docUserData;
      snap.forEach(
        // doc => (docId = doc.id),
        doc =>
          (docUserData = {
            id: doc.id,
            ...doc.data()
          })
      );

      return docUserData;
    });
};

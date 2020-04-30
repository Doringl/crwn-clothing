import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBAX7CHj9G37_xa-lgQG2dK25TRRvXcQAA',
  authDomain: 'crwnclothingdb-24245.firebaseapp.com',
  databaseURL: 'https://crwnclothingdb-24245.firebaseio.com',
  projectId: 'crwnclothingdb-24245',
  storageBucket: 'crwnclothingdb-24245.appspot.com',
  messagingSenderId: '882904831226',
  appId: '1:882904831226:web:26c6b6f89758c9e3d82543',
  measurementId: 'G-JF46TJJ7SM',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userReferance = fireStore.doc(`users/${userAuth.uid}`);
  const snapShot = await userReferance.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userReferance.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userReferance;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

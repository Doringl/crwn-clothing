import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

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
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
  const collectionRef = fireStore.collection(collectionKey);
  const batch = fireStore.batch();

  objectToAdd.forEach((obj) => {
    const newCollectionRef = collectionRef.doc();
    batch.set(newCollectionRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

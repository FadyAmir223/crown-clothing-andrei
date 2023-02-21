import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDb9MtkIkKAIj2rSA0r8oTz0ijR_dbXjhg',
  authDomain: 'crown-clothing-db-23.firebaseapp.com',
  projectId: 'crown-clothing-db-23',
  storageBucket: 'crown-clothing-db-23.appspot.com',
  messagingSenderId: '331622511860',
  appId: '1:331622511860:web:74836832763c1950a75aa1',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySanpshot = await getDocs(q);

  const categoryMap = querySanpshot.docs.reduce((acc, docSanpshot) => {
    const { title, items } = docSanpshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, moreInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth,
      createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...moreInfo,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password)
    return await createUserWithEmailAndPassword(auth, email, password);
  return;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password)
    return await signInWithEmailAndPassword(auth, email, password);
  return;
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

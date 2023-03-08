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
  User,
  NextOrObserver,
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
  DocumentReference,
} from 'firebase/firestore';
import { Category } from '../../store/categories/category.types';

const firebaseConfig = {
  apiKey: 'AIzaSyDb9MtkIkKAIj2rSA0r8oTz0ijR_dbXjhg',
  authDomain: 'crown-clothing-db-23.firebaseapp.com',
  projectId: 'crown-clothing-db-23',
  storageBucket: 'crown-clothing-db-23.appspot.com',
  messagingSenderId: '331622511860',
  appId: '1:331622511860:web:74836832763c1950a75aa1',
};

/*const firebaseApp = */
initializeApp(firebaseConfig);

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

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySanpshot = await getDocs(q);

  return querySanpshot.docs.map(
    (docSanpshot) => docSanpshot.data() as Category
  );
};

export type MoreInfo = {
  displayName?: string;
};

export type UserData = {
  displayName: string;
  email: string;
  createdAt: Date;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  moreInfo = {} as MoreInfo
): Promise<void | DocumentReference<UserData>> => {
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
      console.log('error creating the user', error);
    }
  }
  return userDocRef as DocumentReference<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email && password)
    return await createUserWithEmailAndPassword(auth, email, password);
  return;
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (email && password)
    return await signInWithEmailAndPassword(auth, email, password);
  return;
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

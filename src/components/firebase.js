import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCfHhA6tt7lZ3ZdDcUmuAb64igExu04Ef0',
  authDomain: 'disney-plus-k.firebaseapp.com',
  projectId: 'disney-plus-k',
  storageBucket: 'disney-plus-k.appspot.com',
  messagingSenderId: '1081969137965',
  appId: '1:1081969137965:web:b048a37bd1545adce89ba4',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;

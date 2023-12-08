// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCfHhA6tt7lZ3ZdDcUmuAb64igExu04Ef0',
  authDomain: 'disney-plus-k.firebaseapp.com',
  projectId: 'disney-plus-k',
  storageBucket: 'disney-plus-k.appspot.com',
  messagingSenderId: '1081969137965',
  appId: '1:1081969137965:web:b048a37bd1545adce89ba4',
};

const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-DLoKkIO-XaN2kwq_JMCfgP-O6W5Rem0",
  authDomain: "netflix-remake-build.firebaseapp.com",
  projectId: "netflix-remake-build",
  storageBucket: "netflix-remake-build.appspot.com",
  messagingSenderId: "860897020468",
  appId: "1:860897020468:web:5ad1ed01e9fdc4d86e5861"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export const auth = firebase.auth();

export default db;
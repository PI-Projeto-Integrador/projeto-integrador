import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAPNyFQ-NscOLn6v1VhoSdzlzXeoFl_tG4',
  authDomain: 'acme-91645.firebaseapp.com',
  databaseURL: 'https://acme-91645-default-rtdb.firebaseio.com',
  projectId: 'acme-91645',
  storageBucket: 'acme-91645.appspot.com',
  messagingSenderId: '331780812259',
  appId: '1:331780812259:web:7392d41cad338f05b104d6',
  measurementId: 'G-3PY3FWZYSW',
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();

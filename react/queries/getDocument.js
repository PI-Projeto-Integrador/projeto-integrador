import { db } from '../config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

export const getDocument = async (colecao, argument) => {
  try {
    await getDoc(doc(db, colecao, argument));
  } catch (err) {
    console.error(err);
  }
};

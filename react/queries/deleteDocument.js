import { db } from '../config/firebase.js';
import { doc, deleteDoc } from 'firebase/firestore';

export const deleteDocument = async (colecao, argument) => {
  try {
    await deleteDoc(doc(db, colecao, argument));
  } catch (err) {
    console.error(err);
  }
};

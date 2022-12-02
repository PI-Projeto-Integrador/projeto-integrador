import { db } from '../config/firebase.js';
import { updateDoc } from 'firebase/firestore';

export const updateDocument = async (colecao, campo, payload) => {
  try {
    await updateDoc(db, colecao, campo, payload);
  } catch (err) {
    console.error(err);
  }
};

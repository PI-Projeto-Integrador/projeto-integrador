import { db } from '../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export const getAllDocuments = async (colecao) => {
  try {
    const results = await getDocs(collection(db, 'funcionario'));
    const doca = results.docs.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (err) {
    console.error(err);
  }
};

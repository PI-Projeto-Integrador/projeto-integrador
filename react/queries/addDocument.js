import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const addDocument = async (colecao, payload) => {
  try {
    const docRef = await addDoc(collection(db, colecao), payload);
    console.log('Documento adicionado com sucesso! ID: ', docRef.id);
  } catch (err) {
    console.error(err);
  }
};

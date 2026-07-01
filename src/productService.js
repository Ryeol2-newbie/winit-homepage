// src/productService.js
import { db } from './firebase';
import {
  collection, addDoc, deleteDoc, doc, onSnapshot, orderBy, query,
} from 'firebase/firestore';

const productsRef = collection(db, 'products');

export function subscribeToProducts(callback) {
  const q = query(productsRef, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

export async function addProduct({ category, name, desc, imageBase64 }) {
  await addDoc(productsRef, {
    category,  // 카테고리 (자유 입력)
    name,
    desc,
    imageBase64,
    createdAt: Date.now(),
  });
}

export async function deleteProduct(id) {
  await deleteDoc(doc(db, 'products', id));
}
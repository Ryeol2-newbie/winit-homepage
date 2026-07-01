// src/productService.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

const productsRef = collection(db, 'products');

// 작품 목록 실시간으로 가져오기 (최신 등록순)
export function subscribeToProducts(callback) {
  const q = query(productsRef, orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const items = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  });
}

// 작품 추가
export async function addProduct({ tag, name, desc, imageBase64 }) {
  await addDoc(productsRef, {
    tag,
    name,
    desc,
    imageBase64,
    createdAt: Date.now(),
  });
}

// 작품 삭제
export async function deleteProduct(id) {
  await deleteDoc(doc(db, 'products', id));
}
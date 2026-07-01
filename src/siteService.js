// src/siteService.js
import { db } from './firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

// hero 이미지 저장
export async function setHeroImage(imageBase64) {
  await setDoc(doc(db, 'siteImages', 'hero'), { imageBase64, updatedAt: Date.now() });
}

// hero 이미지 실시간으로 가져오기
export function subscribeToHeroImage(callback) {
  return onSnapshot(doc(db, 'siteImages', 'hero'), (snap) => {
    callback(snap.exists() ? snap.data().imageBase64 : null);
  });
}
// Firebase 초기화 파일
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAns2Be1UDdxsAp4r6pGVkLIXFUDkWUBKY",
  authDomain: "winit-felt.firebaseapp.com",
  projectId: "winit-felt",
  storageBucket: "winit-felt.firebasestorage.app",
  messagingSenderId: "1070807487838",
  appId: "1:1070807487838:web:f74642fbce705bae8e6bcf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
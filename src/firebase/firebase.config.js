// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9B_wYu3zEGu-7KCSCnv9fyVrtesyUENE',
  authDomain: 'fir-blog-fb733.firebaseapp.com',
  databaseURL: 'https://fir-blog-fb733-default-rtdb.firebaseio.com',
  projectId: 'fir-blog-fb733',
  storageBucket: 'fir-blog-fb733.appspot.com',
  messagingSenderId: '365352286523',
  appId: '1:365352286523:web:4319c0b44b49ffbf249f1e',
  measurementId: 'G-97MYJXV7S2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const database = getDatabase(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

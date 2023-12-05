import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // "AIzaSyD9_bmknXxHpkbPy2Qq0a38hYsaJLeXVHs",
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

const firebaseConfig = {
  apiKey: "AIzaSyD9_bmknXxHpkbPy2Qq0a38hYsaJLeXVHs",
  authDomain: "brain-games-758a6.firebaseapp.com",
  projectId: "brain-games-758a6",
  storageBucket: "brain-games-758a6.appspot.com",
  messagingSenderId: "839928296527",
  appId: "1:839928296527:web:c9e58c3afef660fc19e63a",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app

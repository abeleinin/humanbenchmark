import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// const firebaseConfig = {
// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCzlUIwHl0mqQRK0UKsestwm5mLVflO-xU',
  authDomain: 'hb-dev-f2719.firebaseapp.com',
  projectId: 'hb-dev-f2719',
  storageBucket: 'hb-dev-f2719.appspot.com',
  messagingSenderId: '377694841570',
  appId: '1:377694841570:web:e7c037b9a27376f3fc8cbb'
  //databaseURL: 'https://hb-dev-f2719-default-rtdb.firebaseio.com/'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const database = getDatabase(app)
export default app

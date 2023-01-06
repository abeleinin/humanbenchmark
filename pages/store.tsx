import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

async function addData(username, email, uid) {
  const docRef = doc(db, 'users', uid)
  await setDoc(docRef, {
    username: username,
    email: email,
    joined: new Date()
  })
}

export default addData

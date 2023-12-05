import { createContext, useContext } from 'react'
import { setDoc, updateDoc, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'

const DatabaseContext = createContext()

export function useDB() {
  return useContext(DatabaseContext)
}

export function DatabaseProvider({ children }) {
  const { currentUser } = useAuth()

  async function setData(uid, username, email) {
    const docRef = doc(db, 'users', uid)
    const data = {
      username: username,
      email: email,
      joined: new Date(),
      visual: [],
      sequence: []
    }
    await setDoc(docRef, data)
  }

  async function getData() {
    const data = await getDoc(doc(db, 'users', currentUser.uid))
    return data.data()
  }

  async function updateData(uid, key, value) {
    await updateDoc(doc(db, 'users', uid), {
      [`${key}`]: value
    })
  }

  const value = {
    setData,
    getData,
    updateData
  }

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  )
}

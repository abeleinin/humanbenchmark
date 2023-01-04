import { createContext, useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { auth, database } from '../firebase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logoutUser() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function writeUserData(userId, name, email) {
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email
    })
  }

  const value = {
    currentUser,
    createUser,
    loginUser,
    logoutUser,
    writeUserData
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

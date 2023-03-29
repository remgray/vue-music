// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDg-YxjlaQFeojcrWA9rmQ1YCAo6TMRSIY',
  authDomain: 'vue-music-fb244.firebaseapp.com',
  projectId: 'vue-music-fb244',
  storageBucket: 'vue-music-fb244.appspot.com',
  messagingSenderId: '1054026367055',
  appId: '1:1054026367055:web:9e0b6db9ce73495c24ea3a'
}

const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

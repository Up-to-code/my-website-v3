import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCXiJbQOAUCGUlTSGjYHs9tkKkadhlBxb0",
  authDomain: "my-website-310.firebaseapp.com",
  databaseURL: "https://my-website-310-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-website-310",
  storageBucket: "my-website-310.appspot.com",
  messagingSenderId: "866985940487",
  appId: "1:866985940487:web:ae53a958dce0e23686bca2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const Storage = getStorage(app)
const analytics = getAnalytics(app);

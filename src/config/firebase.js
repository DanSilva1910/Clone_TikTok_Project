import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDZrb8Y6qw8_BqzCxm2npUwn2Yzu-BHccE",
  authDomain: "tiktok---jornada-dev-e3517.firebaseapp.com",
  projectId: "tiktok---jornada-dev-e3517",
  storageBucket: "tiktok---jornada-dev-e3517.appspot.com",
  messagingSenderId: "979991049064",
  appId: "1:979991049064:web:716091f6dcf0984b8b1cdd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

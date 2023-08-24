import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env
//     .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_IDVITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKj4uwOnU3Lg_qXVKhgCLXdK2g-Wer_MY",
  authDomain: "auth-development-c2f88.firebaseapp.com",
  projectId: "auth-development-c2f88",
  storageBucket: "auth-development-c2f88.appspot.com",
  messagingSenderId: "661376576003",
  appId: "1:661376576003:web:75ee0cecff0516f8c03c36",
};

const app = initializeApp(firebaseConfig);

//variable for authentication
export const auth = getAuth(app);

//database
export const db = getFirestore(app);

export default app;

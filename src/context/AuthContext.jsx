import React, { useContext, useState, useEffect, createContext } from "react";
import { enqueueSnackbar } from "notistack";
import { auth, db } from "../firebase";
import {
  onSnapshot,
  addDoc,
  collection,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [movieData, setMovieData] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmailUser(email) {
    return updateEmail(auth.currentUser, email);
  }
  function updatePasswordUser(password) {
    return updatePassword(auth.currentUser, password);
  }

  function updateUserName(userName) {
    return updateProfile(auth.currentUser, userName);
  }

  useEffect(() => {
    //when ever we call the createUserWithEmailAndPassword its gonna set
    //user for us
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    //cleanup function
    //unsubscribe for us from the onAuthStateChanged method when unmount this component
    return unsubscribe;
  }, []);

  const moviesCollection = collection(db, `${currentUser?.uid}`);
  useEffect(() => {
    const unsubscribedb = onSnapshot(moviesCollection, function (snapshot) {
      // Sync up our local notes array with the snapshot data
      const movieArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieData(movieArr);
    });
    return unsubscribedb;
  }, [currentUser]);

  async function addNewMovie(movieobj) {
    let isExist = movieData.some(
      (filmList) => filmList["imdbID"] === movieobj.imdbID
    );
    let message = isExist ? "Already in watchlist" : "Added to watchlist";
    let variant = isExist ? "error" : "success";
    let snackbar = enqueueSnackbar(message, {
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
      variant: variant,
    });
    if (isExist) {
      snackbar;
    } else {
      await addDoc(moviesCollection, { ...movieobj, updatedAt: Date.now() });
      snackbar;
    }
  }

  async function deleteMovie(id) {
    const docRef = doc(db, `${currentUser?.uid}`, id);
    await deleteDoc(docRef);
    enqueueSnackbar("Removed from watchlist", {
      anchorOrigin: { vertical: "bottom", horizontal: "right" },
      variant: "info",
    });
  }

  /************************************** Firebase Collection****************************************** */

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmailUser,
    updatePasswordUser,
    addNewMovie,
    movieData,
    deleteMovie,
    updateUserName,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext, useAuth };

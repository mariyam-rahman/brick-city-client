import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  // onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (name, email, password) => {
    setLoading(true);
    console.log({ name, password, email });
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then(async (res) => {
      await updateProfile(auth.currentUser, {
        displayName: name,
        // photoURL: photoUrl,
      });
      return res;
    });

    setUser(res.user);
    setLoading(false);
  };

  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    //   setLoading(false);
    //   console.log(currentUser);
    // });
    // return () => {
    //   return unsubscribe();
    // };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

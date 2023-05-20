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

    localStorage.setItem("user", JSON.stringify(res.user));

    setUser(res.user);
    setLoading(false);
  };

  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
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
    try {
      const json = localStorage.getItem("user");
      if (json) {
        const userDataFromLocalStorage = JSON.parse(json);
        if (userDataFromLocalStorage) {
          setUser(userDataFromLocalStorage);
        }
      }
    } catch (ex) {
      console.log("");
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.init";
// import axios from "axios";
// import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isloading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        console.log(user);
        // axios.post(
        //   "http://localhost:5000/jwt",
        //   { email: user.email },
        //   { withCredentials: true }
        // );
      } else {
        setUser(null);
        // axios.get("http://localhost:5000/deletecookie", {
        //   withCredentials: true,
        // });
      }
    });
    return () => unsubscribe();
  }, []);
  const values = {
    googleLogin,
    isloading,
    setLoading,
    createUser,
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;

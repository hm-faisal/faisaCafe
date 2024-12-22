import PropTypes from "prop-types";
import AuthContext from "./AuthContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import useAxios from "../../hooks/useAxios";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosBase = useAxios();

  // authentication state observer and get user data

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = { email: currentUser?.email };

      if (currentUser) {
        axiosBase
          .post("/jwt", userEmail, { withCredentials: true })
          .then()
          .catch((e) => console.log(e));
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Register New user with email password

  const signUpUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update user profile

  const updateUser = (displayName, photoURL) => {
    const userNameAndProfileImage = { displayName, photoURL };
    return updateProfile(auth.currentUser, userNameAndProfileImage);
  };

  // Sign in existing users with firebase

  const signInUserWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out existing User

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /**
   * All Auth Context Values
   */
  const AuthContextValue = {
    user,
    loading,
    setUser,
    setLoading,
    signUpUserWithEmailPassword,
    updateUser,
    signInUserWithEmailPassword,
    googleSignIn,
    signOutUser,
  };
  return (
    <>
      <AuthContext.Provider value={AuthContextValue}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;

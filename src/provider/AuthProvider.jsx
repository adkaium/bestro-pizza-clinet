import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()
  const googleProvider = new GoogleAuthProvider();

  // create new user by firebasse systems
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user by firebase system

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signIn with google
  const signwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logOut User from app

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // updated user name
  const upDatedeUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      if (currentUSer) {
        // get token and store client
        const userInfo = {email: currentUSer.email};
        axiosPublic.post("/jwt", userInfo).then((res) => {
          
          if (res.data.token) {
            console.log(res.data.token);
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    upDatedeUser,
    signwithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

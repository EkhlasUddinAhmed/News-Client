import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../Firebase/firebase.config.init";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();

const useAuthentication = () => {
  const [activeUser, setActiveUser] = useState({});
  const [activeUserError, setActiveUserError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleLoginActiveUser = () => {
    return signInWithPopup(auth, provider);
  };

  const activeUserSignOut = () => {
    return signOut(auth);
  };

  const newUserRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const newUserNameAndPhotoSet = (userObject) => {
    return updateProfile(auth.currentUser, userObject);
  };
  const signInWithEmailAndPasswordHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const sendNewUserAnEmailVerificationEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setActiveUser(user);
          setIsLoading(false);
          console.log("From useSAuthentication: Active User Is", user);
      } else {
        setActiveUser({});
        setIsLoading(false);
        console.log("Active User Not Found");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [activeUser.displayName]);

  return {
    activeUser,
    setActiveUser,
    googleLoginActiveUser,
    isLoading,
    setIsLoading,
    activeUserSignOut,
    newUserRegistration,
    activeUserError,
    setActiveUserError,
    newUserNameAndPhotoSet,
    signInWithEmailAndPasswordHandler,
    sendNewUserAnEmailVerificationEmail,
  };
};

export default useAuthentication;

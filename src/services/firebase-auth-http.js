import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const signupWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return {
        data: user,
        error: null,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        data: null,
        error,
      };
    });
};

const signinWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {
        data: user,
        error: null,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        data: null,
        error,
      };
    });
};

const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      return {
        data: {
          isDone: true,
        },
        error: null,
      };
    })
    .catch((error) => {
      return {
        data: null,
        error,
      };
    });
};

export { signupWithEmailAndPassword, signinWithEmailAndPassword, signOutUser };

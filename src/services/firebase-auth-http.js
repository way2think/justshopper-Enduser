import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as sendResetPasswordEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const signupWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed up
    const user = userCredential.user;
    console.log(`signupWithEmailAndPassword: ${email} - success`, user);
    return {
      data: {
        ...user,
      },
      error: null,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`signupWithEmailAndPassword: ${email} - error`, error);
    return {
      data: null,
      error,
    };
  }
};

const signinWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(`signinWithEmailAndPassword: ${email} - success`, user);
    return {
      data: user,
      error: null,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`signinWithEmailAndPassword: ${email} - error`, error);
    return {
      data: null,
      error,
    };
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await sendResetPasswordEmail(auth, email);
    console.log(`sendPasswordResetEmail: ${email} - success`);
    return {
      data: {
        isDone: true,
      },
      error: null,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`sendPasswordResetEmail: ${email} - error`, error);
    return {
      data: null,
      error,
    };
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      data: {
        isDone: true,
      },
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};

export {
  signupWithEmailAndPassword,
  signinWithEmailAndPassword,
  sendPasswordResetEmail,
  signOutUser,
};

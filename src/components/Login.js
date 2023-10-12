import React, { useRef, useState } from "react";
import Header from "./Header";
import bgImage from "../images/netflix-background.jpg";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig, auth } from "../utils/firebase";

function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const [isSignInForm, setSignInForm] = useState(true);
  const toogleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  initializeApp(firebaseConfig);
  const handleBtnClick = () => {
    // Validate the form data

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMsg(message);

    // If validation failed
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user: ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="backaground" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-80 w-4/12 p-12 mx-auto my-36 left-0 right-0"
      >
        <h1 className="font-bold text-white text-3xl mx-2 py-2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="py-2 px-4 m-2 w-full bg-[#333] text-white rounded-sm"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="py-2 px-4 m-2 w-full bg-[#333] text-white rounded-sm"
          onChange={(e) => e.target.value}
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 m-2 w-full bg-[#333] text-white rounded-sm"
          ref={password}
        />
        <p className="text-red-600 text-lg m-2">{errorMsg}</p>
        <button
          className="p-2 m-2 mt-8 w-full bg-red-700 text-white rounded-sm font-semibold"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="flex justify-between ml-2">
          <div>
            <input
              type="checkbox"
              defaultChecked
              className="text-black accent-slate-500"
            />
            <span className="pl-1 text-white">Remeber me</span>
          </div>
          <p className="text-white cursor-pointer">Need help?</p>
        </div>
        <div className="m-2 mt-10 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm ? (
            <div>
              <span className="text-gray-400">New to Netflix?</span>
              <span className="text-white pl-1 font-semibold">Sign up now</span>
            </div>
          ) : (
            <div>
              <span className="text-gray-400">Already Netflix user?</span>
              <span className="text-white pl-1 font-semibold">Sign In</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;

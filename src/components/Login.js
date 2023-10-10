import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const toogleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute bg-black bg-opacity-80 w-3/12 p-12 mx-auto my-36 left-0 right-0">
        <h1 className="font-bold text-white text-3xl mx-2 py-2">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="py-2 px-4 m-2 w-full bg-[#4d4d4d] text-white rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 m-2 w-full bg-[#4d4d4d] text-white rounded-sm"
        />
        <button className="p-2 m-2 mt-8 w-full bg-red-700 text-white rounded-sm">
          Sign In
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
          <p className="text-white">Need help?</p>
        </div>
        <div className="m-2 mt-10">
          <span className="text-gray-400">New to Netflix?</span>
          <span className="text-white pl-1" onClick={toogleSignInForm}>
            Sign up now
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;

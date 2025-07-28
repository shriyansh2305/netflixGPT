import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef("");
  const password = useRef("");
  const name = useRef("");
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = () => {
    // validate the data
    const message = checkValidData(email.current.value, password.current.value, name.current.value, !isSignInForm);
    console.log(message);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black/70 text-white my-36 mx-auto right-0 left-0 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full border border-white bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full border border-white bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full border border-white bg-gray-700"
        />
        {errorMessage && (
          <p className="text-red-700 font-bold text-xl py-4">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetflixGPT ? Sign Up Now"
            : "Already a Member ? Sign In Here"}
        </p>
      </form>
    </div>
  );
};

export default Login;

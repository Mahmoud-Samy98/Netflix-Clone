import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import SignInScreen from "./SignInScreen";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [login, setLogin] = useState(false);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {login ? (
        <SignInScreen />
      ) : (
        <div className="signupScreen">
          <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              <span className="signupScreen_gray">
                Already have an account?{" "}
              </span>
              <span
                className="signupScreen_link"
                onClick={() => setLogin(true)}
              >
                Sign In now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUpScreen;

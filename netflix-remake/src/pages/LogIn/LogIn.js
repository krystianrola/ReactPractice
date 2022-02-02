import React, { useState } from "react";
import "./LogIn.css";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

/* <>  is a fragment */

function LogIn() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login_screen">
      <div className="login_background">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button 
            className="loginscreen_btn" 
            onClick={() => setSignIn(true)}
        >
          Sign in
        </button>
        <div className="loginscreen_gradient" />

        <div className="loginscreen_body">
          {
              true ? (
                <SignUpScreen />
              ) : (
                <>
            <h1> Unlimited Movies, TV shows and more. </h1>
            <div className="loginscreen_input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginscreen_getstarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
              )
          }
        </div>
      </div>
    </div>
  );
}

export default LogIn;

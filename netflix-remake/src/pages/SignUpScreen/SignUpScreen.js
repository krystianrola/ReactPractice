import React from 'react';
import "./SignUpScreen.css";

function SignUpScreen() {
  return (
    <div className='signupscreen'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Enter email'/>
            <input type="password" placeholder='Enter password'/>
            <button type="submit"> Sign In </button>

            <h4>
                <span className='signupscreen_gray' >New to Netflix? </span>&nbsp; 
                <span className='signupscreen_link' >Sign up now.</span>
            </h4>

        </form>
    </div>
  )
}


export default SignUpScreen;

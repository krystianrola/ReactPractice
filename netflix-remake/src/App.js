import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import LogIn from "./pages/LogIn/LogIn";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";

function App() {
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(() => {
    // onAuth.. is a listener it listens to any authentication state
    // even if you refresh it will know you are logged in through cookies
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        // logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
}, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LogIn />
        ) : (
          <Routes>
            <Route path="/profile" element={ <ProfileScreen /> }/>
            <Route path="/" element={ <HomeScreen /> } />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

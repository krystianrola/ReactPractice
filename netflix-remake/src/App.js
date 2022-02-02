import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import LogIn from "./pages/LogIn/LogIn";

function App() {
const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LogIn />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

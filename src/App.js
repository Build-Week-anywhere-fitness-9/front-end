import "./App.css";
import React from "react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Link, Route } from "react-router-dom";

import "./App.css";
import WelcomeScreen from "./Components/WelcomeScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anywhere Fitness</h1>

        <nav>
          <Link to="/">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
      </header>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/">
        <WelcomeScreen />
      </Route>
    </div>
  );
}

export default App;

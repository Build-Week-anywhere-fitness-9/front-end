import "./App.css";
import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WelcomeScreen from "./components/WelcomeScreen";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        {/* nav links */}
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
        {/* routes */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </header>

      <Switch>
        <Route exact path='/'>
          <WelcomeScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
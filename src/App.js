import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import WelcomeScreen from "./Components/WelcomeScreen";
import ClassList from './Components/ClassList';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        {/* nav links */}
        <nav>
          <Link to="/">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
        {/* routes */}
      </header>

      <Switch>
        <Route exact path='/'>
          <WelcomeScreen />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path='/classlist'>
          <ClassList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;